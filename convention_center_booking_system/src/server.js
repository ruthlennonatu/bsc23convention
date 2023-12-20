import express from 'express';
import mysql from 'mysql2';
import 'dotenv/config';

var app = express();

import rateLimit from 'express-rate-limit';


// Configure rate limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(express.json()); // For parsing application/json


console.log(process.env.DB_HOST);
console.log("here");


// Set up MySQL connection
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});


// Endpoint to add a new customer
app.post('/add-customer', (req, res) => {
  const customer = req.body;
  const checkQuery = 'SELECT * FROM customers WHERE email = ? OR phone_number = ?';
  const checkValues = [customer.email, customer.phone_number];

  con.query(checkQuery, checkValues, (err, results) => {
    if (err) {
      console.error('Error checking for customer:', err);
      res.status(500).send('Error checking for customer');
      return;
    }

    if (results.length > 0) {
      res.send('Customer already exists!');
    } else {
      const insertQuery = 'INSERT INTO customers (first_name, last_name, email, phone_number) VALUES (?, ?, ?, ?)';
      const insertValues = [customer.first_name, customer.last_name, customer.email, customer.phone_number];

      con.query(insertQuery, insertValues, (err, results) => {
        if (err) {
          console.error('Error inserting customer:', err);
          res.status(500).send('Error inserting customer');
          return;
        }

        res.send('Customer inserted successfully!');
      });
    }
  });
});

// Apply the rate limiting middleware to the /customers route
app.use('/customers', apiLimiter);

// Endpoint to get all customers
app.get('/customers', (req, res) => {
  con.query('SELECT * FROM customers', (err, results) => {
    if (err) {
      console.error('Error fetching customers:', err);
      res.status(500).send('Error fetching customers');
      return;
    }
    res.json(results);
  });
});

// // Endpoint to get all customers
// app.get('/customers', (req, res) => {
//   con.query('SELECT * FROM customers', (err, results) => {
//     if (err) {
//       console.error('Error fetching customers:', err);
//       res.status(500).send('Error fetching customers');
//       return;
//     }
//     res.json(results);
//   });
// });

const PORT = 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}


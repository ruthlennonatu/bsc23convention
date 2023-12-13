import mysql from 'mysql2';
import 'dotenv/config';

// Create MySQL connection
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

console.log(process.env.DB_USER);
// Connect to the database
con.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log("Connected to MySQL!");

  // Query to fetch all customers
  con.query('SELECT * FROM customers', (err, results) => {
    if (err) {
      console.error('Error fetching customers:', err);
    } else {
      console.log('Customers:', results);
    }

    // Close the connection
    con.end();
  });
});

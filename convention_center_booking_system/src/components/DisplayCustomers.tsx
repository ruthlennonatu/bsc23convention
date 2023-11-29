import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Customer {
  first_name: string;
  last_name: string;
  email: string;
}

function DisplayCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.first_name} {customer.last_name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayCustomers;

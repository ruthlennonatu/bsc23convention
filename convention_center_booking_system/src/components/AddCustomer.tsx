import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

function AddCustomer() {
  const [customer, setCustomer] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/add-customer', customer);
      console.log(response.data);
      alert('Customer added successfully');
    } catch (error) {
      console.error('Error adding customer', error);
      alert('Error adding customer');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        type="text"
        placeholder="First Name"
        value={customer.first_name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        type="text"
        placeholder="Last Name"
        value={customer.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone_number"
        type="text"
        placeholder="Phone Number"
        value={customer.phone_number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default AddCustomer;

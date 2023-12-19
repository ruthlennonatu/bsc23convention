import React from 'react';

interface DisplayCustomersProps {
  customers: string[];
  showDetails: boolean;
}

const DisplayCustomers: React.FC<DisplayCustomersProps> = ({ customers, showDetails }) => {
  return (
    <div>
      <h1>Hello</h1>
      {showDetails &&
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>{customer}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default DisplayCustomers;
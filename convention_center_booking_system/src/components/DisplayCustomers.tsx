import React from 'react';


interface DisplayCustomersProps {
  customers: string[];
  showDetails: boolean;
}

const DisplayCustomers: React.FC<DisplayCustomersProps> = ({ }) => {
  return (
    <h1> Hello</h1>
  );
};

export default DisplayCustomers;

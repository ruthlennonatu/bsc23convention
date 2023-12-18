import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerPage from '../CustomerPage';

test('calls handleCheckout when button is clicked with a selected event', () => {
  render(<CustomerPage />);

  // Select an event
  const selectElement = screen.getByLabelText(/Choose an event:/);
  fireEvent.change(selectElement, { target: { value: 'Event 1' } });

  // Mock the console.log function
  const originalLog = console.log;
  console.log = jest.fn();

  // Click the Checkout button
  const checkoutButton = screen.getByText(/Checkout/i);
  fireEvent.click(checkoutButton);

  // Assert that handleCheckout is called with the selected event
  expect(console.log).toHaveBeenCalledWith('Checkout for Event 1');

  // Restore the original console.log function
  console.log = originalLog;
});

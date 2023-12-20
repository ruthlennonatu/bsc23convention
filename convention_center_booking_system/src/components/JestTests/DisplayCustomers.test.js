import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Make sure this import is present
import DisplayCustomers from '../DisplayCustomers'; // Adjust the path as necessary

describe('DisplayCustomers', () => {
  test('renders the greeting message', () => {
    render(<DisplayCustomers />);
    const greetingElement = screen.getByText('Hello');
    expect(greetingElement).toBeInTheDocument();
  });
});

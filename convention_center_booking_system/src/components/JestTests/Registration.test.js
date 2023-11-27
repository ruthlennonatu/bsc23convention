import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterComponent from './path-to-your-register-component'; // Adjust the import path as necessary

describe('RegisterComponent', () => {
  test('renders the register form', () => {
    const { getByText } = render(<RegisterComponent />);
    expect(getByText('Register')).toBeInTheDocument();
  });

  test('validates email input on change', () => {
    const { getByPlaceholderText, getByText } = render(<RegisterComponent />);
    const emailInput = getByPlaceholderText('Enter email');

    // Triggering an invalid email format
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    expect(getByText('Please use format joe123@outlook.ie')).toBeInTheDocument();

    // Triggering a valid email format
    fireEvent.change(emailInput, { target: { value: 'joe123@outlook.ie' } });
    // The error message should not be present for valid email
    expect(() => getByText('Please use format joe123@outlook.ie')).toThrow();
  });
});

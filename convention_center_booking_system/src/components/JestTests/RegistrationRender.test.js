import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterComponent from './RegisterComponent';

describe('RegisterComponent', () => {
  it('renders without crashing', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterComponent />);
    
    // Check if certain elements are present
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat email')).toBeInTheDocument();
    // Add more checks for other elements if needed
  });

  it('validates email input and updates state accordingly', () => {
    const { getByPlaceholderText, getByText } = render(<RegisterComponent />);
    
    const emailInput = getByPlaceholderText('Enter email');
    const repeatEmailInput = getByPlaceholderText('Repeat email');

    // Invalid email input
    fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
    fireEvent.change(repeatEmailInput, { target: { value: 'invalidEmail' } });

    expect(getByText('Please use format joe123@outlook.ie')).toBeInTheDocument();
    // Add more assertions for invalid email state
    
    // Valid email input
    fireEvent.change(emailInput, { target: { value: 'validEmail@domain.com' } });
    fireEvent.change(repeatEmailInput, { target: { value: 'validEmail@domain.com' } });

    // Expect the error message to disappear
    expect(queryByText('Please use format joe123@outlook.ie')).not.toBeInTheDocument();
    // Add assertions for valid email state
  });

  // Add more tests to cover other functionalities such as button click handling, form submission, etc.
});

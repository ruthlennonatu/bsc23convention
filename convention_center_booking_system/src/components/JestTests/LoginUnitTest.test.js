// Import necessary libraries and components
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from '../Login';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginComponent  from '../Login';

describe('LoginComponent', () => {
  it('renders correctly', () => {
    // Render the LoginComponent within a Router component
    render(
      <Router>
        <LoginComponent />
      </Router>
    );
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
    //expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account? Register")).toBeInTheDocument();
  });

  it('updates email and password fields on user input', () => {
    // Render the LoginComponent within a Router component
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    // Get email input
    const emailInput = screen.getByPlaceholderText('Enter email');
    // Update input value if changed
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    // Test inputted email to match correct format
    expect(emailInput.value).toBe('test@example.com');
    
    // Get password input
    const passwordInput = screen.getByPlaceholderText('Enter password');
    // Update input value if changed
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    // Compare inputted password against password123
    expect(passwordInput.value).toBe('password123');
  });
  

  it('handles login button click', () => {
    // Spy on the console.log method to track its usage
    const consoleSpy = jest.spyOn(console, 'log');

    // Render the LoginComponent within a Router component
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    // Find the login button in the rendered component by role and name
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // Simulate a click on the login button
    fireEvent.click(loginButton);

    // Check if console.log was called with the expected message when the button was clicked
    expect(consoleSpy).toHaveBeenCalledWith('Login button clicked');
  });

  it('handles register redirect button click', () => {
    // Spy on the console.log method to track its usage
    const consoleSpy = jest.spyOn(console, 'log');
    // Render the LoginComponent within a Router component
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    // Find the register button in the rendered component by its text content
    const registerButton = screen.getByText("Don't have an account? Register");
    // Simulate a click on the register button
    fireEvent.click(registerButton);

    // Check if console.log was called with the expected message when the button was clicked
    expect(consoleSpy).toHaveBeenCalledWith('Redirect to register');
  });
});
  

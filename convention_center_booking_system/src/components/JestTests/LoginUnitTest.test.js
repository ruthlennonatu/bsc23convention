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

describe('LoginComponent', () => {
  it('renders correctly', () => {
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
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Enter email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');

    const passwordInput = screen.getByPlaceholderText('Enter password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  it('handles login button click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    expect(consoleSpy).toHaveBeenCalledWith('Login button clicked');
  });

  it('handles register redirect button click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    const registerButton = screen.getByText("Don't have an account? Register");
    fireEvent.click(registerButton);

    expect(consoleSpy).toHaveBeenCalledWith('Redirect to register');
  });
});

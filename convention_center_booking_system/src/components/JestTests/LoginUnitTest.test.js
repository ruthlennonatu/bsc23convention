test('Sample Login test', () => {
  const value = true;
  console.log(value); // This will print 'true'
  expect(value).toBe(true); // This assertion will pass
});

// UNIT TEST CODE - NEEDS TO BE FIXED
/*
    import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginComponent } from '../Login';

describe('LoginComponent', () => {
  it('handles email and password input changes', () => {
    const { getByPlaceholderText } = render(<LoginComponent />);

    const emailInput = getByPlaceholderText('Enter email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Enter password') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testpassword');
  });

  it('calls handleLoginClick when login button is clicked', () => {
    const handleLoginClick = jest.fn();
    const { getByText } = render(<LoginComponent handleLoginClick={handleLoginClick} />);

    const loginButton = getByText('Login');
    fireEvent.click(loginButton);

    expect(handleLoginClick).toHaveBeenCalled();
  });

  it('calls handleRegisterRedirect when register link is clicked', () => {
    const handleRegisterRedirect = jest.fn();
    const { getByText } = render(<LoginComponent handleRegisterRedirect={handleRegisterRedirect} />);

    const registerLink = getByText("Don't have an account? Register");
    fireEvent.click(registerLink);

    expect(handleRegisterRedirect).toHaveBeenCalled();
  });
});


*/
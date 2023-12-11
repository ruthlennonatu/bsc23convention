import React from 'react';
import { render } from '@testing-library/react';
import Registration from './registration'; 

describe('Registration Rendering', () => {
  it('renders the Register page with expected elements', () => {
    const { getByText, getByPlaceholderText } = render(<Registration />);

    expect(getByText('Register')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat email')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter password')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();

  });
});


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterComponent from './RegisterComponent';

describe('RegisterComponent', () => {
  it('renders without crashing', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterComponent />);
    
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat email')).toBeInTheDocument();
  });

  it('validates email input and updates state accordingly', () => {
    const { getByPlaceholderText, getByText } = render(<RegisterComponent />);
    
    const emailInput = getByPlaceholderText('Enter email');
    const repeatEmailInput = getByPlaceholderText('Repeat email');

    fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
    fireEvent.change(repeatEmailInput, { target: { value: 'invalidEmail' } });

    expect(getByText('Please use format joe123@outlook.ie')).toBeInTheDocument();
    
    fireEvent.change(emailInput, { target: { value: 'validEmail@domain.com' } });
    fireEvent.change(repeatEmailInput, { target: { value: 'validEmail@domain.com' } });
    expect(queryByText('Please use format joe123@outlook.ie')).not.toBeInTheDocument();
  });

});

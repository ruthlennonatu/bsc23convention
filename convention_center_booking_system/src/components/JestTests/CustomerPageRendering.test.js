import React from 'react';
import CustomerPage from '../CustomerPage';
import { render } from '@testing-library/react';

test('renders Customer Page without crashing', () => {
  render(<CustomerPage />);
});

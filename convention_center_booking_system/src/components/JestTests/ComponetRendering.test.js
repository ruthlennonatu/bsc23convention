import React from 'react';
import { render } from '@testing-library/react';
import Footer from './components/Footer'; 

test('renders Footer without crashing', () => {
  render(<Footer />);
});

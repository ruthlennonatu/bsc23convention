import React from 'react';
import Footer from '../Footer';
import { render } from '@testing-library/react';

test('renders Footer without crashing', () => {
  render(<Footer />);
});

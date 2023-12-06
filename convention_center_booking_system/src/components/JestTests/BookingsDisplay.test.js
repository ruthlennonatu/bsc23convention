// Aaron Darcy
// Booking Display Test
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingsDisplay from '../BookingsDisplay'; 

describe('BookingsDisplay Component', () => {
  const mockBookings = [
    { id: 1, workshop: 'Workshop 1', venue: 'Venue 1', date: '2021-01-01' },
    { id: 2, workshop: 'Workshop 2', venue: 'Venue 2', date: '2021-02-01' }
  ];

  it('should render booking items', () => {
    render(<BookingsDisplay bookings={mockBookings} />);
    expect(screen.getByText('Workshop 1')).toBeInTheDocument();
    expect(screen.getByText('Venue 1')).toBeInTheDocument();
  });

  it('should allow editing a booking', () => {
    render(<BookingsDisplay bookings={mockBookings} />);

    // Simulate clicking the edit button for the first booking
    fireEvent.click(screen.getAllByText('Edit')[0]);

    // The input field should now be in the document
    expect(screen.getByDisplayValue('Workshop 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Venue 1')).toBeInTheDocument();
  });

  it('should allow saving an edited booking', () => {
    render(<BookingsDisplay bookings={mockBookings} />);

    // Click the edit button, then save button for the first booking
    fireEvent.click(screen.getAllByText('Edit')[0]);
    fireEvent.click(screen.getByText('Save'));

    // After saving, the 'Edit' button should be visible again
    expect(screen.getAllByText('Edit')[0]).toBeInTheDocument();
  });
});

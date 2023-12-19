import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDashboard from '../AdminDashboard'; 

describe('AdminDashboard', () => {
  it('renders the dashboard and buttons', () => {
    // Renders the AdminDashboard component for testing
    render(<AdminDashboard />);

    // Expectations to check if specific text elements are present in the rendered component
    expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Manage Users')).toBeInTheDocument();
    expect(screen.getByText('Manage Conventions')).toBeInTheDocument();
    expect(screen.getByText('Manage Workshops')).toBeInTheDocument();
  });

  it('checks console log on button click', () => {
    // Spies on the console.log method to track its calls
    const consoleSpy = jest.spyOn(console, 'log');
    render(<AdminDashboard />);

    // Simulates a click on 'Manage Users' and expects a specific log message
    fireEvent.click(screen.getByText('Manage Users'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Users');

    // Simulates a click on 'Manage Conventions' and expects a specific log message
    fireEvent.click(screen.getByText('Manage Conventions'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Conventions');

    // Simulates a click on 'Manage Workshops' and expects a specific log message
    fireEvent.click(screen.getByText('Manage Workshops'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Workshops');

    // Restores the original console.log method
    consoleSpy.mockRestore();
  });
});

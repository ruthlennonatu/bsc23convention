import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDashboard from '../AdminDashboard'; // Adjust the import path as necessary

describe('AdminDashboard', () => {
  it('renders the dashboard and buttons', () => {
    render(<AdminDashboard />);

    expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Manage Users')).toBeInTheDocument();
    expect(screen.getByText('Manage Conventions')).toBeInTheDocument();
    expect(screen.getByText('Manage Workshops')).toBeInTheDocument();
  });

  it('checks console log on button click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<AdminDashboard />);

    fireEvent.click(screen.getByText('Manage Users'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Users');

    fireEvent.click(screen.getByText('Manage Conventions'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Conventions');

    fireEvent.click(screen.getByText('Manage Workshops'));
    expect(consoleSpy).toHaveBeenCalledWith('Selected option: Workshops');

    consoleSpy.mockRestore();
  });
});

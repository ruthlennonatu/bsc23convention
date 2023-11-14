import React, { useState } from 'react';

interface Booking {
  id: number;
  workshop: string;
  venue: string;
  date: string;
}

interface Props {
  bookings: Booking[];
}

const BookingsDisplay: React.FC<Props> = ({ bookings }) => {
  const [editingBookingId, setEditingBookingId] = useState<number | null>(null);

  const handleEditClick = (bookingId: number) => {
    setEditingBookingId(bookingId);
    // Will need to add some logic here when the database is up
  };

  const handleSaveClick = () => {
    setEditingBookingId(null);
    // Will need to add some logic here when the database is up
  };

  return (
    <div>
      <h2>Your Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Workshop</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td style={{ width: '80px' }}>{editingBookingId === booking.id ? <input type="text" defaultValue={booking.workshop} /> : booking.workshop}</td>
              <td style={{ width: '80px' }}>{editingBookingId === booking.id ? <input type="text" defaultValue={booking.venue} /> : booking.venue}</td>
              <td style={{ width: '80px' }}>{editingBookingId === booking.id ? <input type="text" defaultValue={booking.date} /> : booking.date}</td>
              <td>
                {editingBookingId === booking.id ? (
                  <button onClick={handleSaveClick}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(booking.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsDisplay;

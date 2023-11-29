import React, { useState } from 'react';

const CustomerPage = () => {
  const events = [
    { id: 1, name: 'Event 1', price: 20 },
    { id: 2, name: 'Event 2', price: 25 },
    { id: 3, name: 'Event 3', price: 30 },
  ];

  const [selectedEvent, setSelectedEvent] = useState('');

  const handleEventChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedEvent(event.target.value);
  };


  const handleCheckout = () => {
    if (selectedEvent) {
      console.log(`Checkout for ${selectedEvent}`);
    } else {
      alert('Please select an event first.');
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <label htmlFor="events">Choose an event:</label>
      <select id="events" value={selectedEvent} onChange={handleEventChange}>
        <option value="">Select an event</option>
        {events.map((event) => (
          <option key={event.id} value={event.name}>
            {event.name} - €{event.price}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CustomerPage;


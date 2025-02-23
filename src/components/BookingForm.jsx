// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = ({ onBookingSubmit }) => {
  const [guestCount, setGuestCount] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit({ guestCount, date, time });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Booking Form</h2>
      <div>
        <label className="block mb-2">Guest Count:</label>
        <input type="number" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-2">Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-2">Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;

import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter'; 
import HallCard from '../components/HallCard'; 
import BookingForm from '../components/BookingForm';

const FunctionHalls = () => {
  const [data, setData] = useState([]); 
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch('https://api.sheety.co/c77553cf2b7ffae33fdcc19b19dfd6b4/hotelUd/sheet1');
    const data = await response.json();
    const fetchedData = data.sheet1
      .map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.imageUrl,
        location: eachItem.location,
        price:eachItem.price,
        rating:eachItem.rating,
        description:eachItem.description
      }));
    setData(fetchedData);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleBookingSubmit = (bookingDetails) => {
    console.log('Booking Details:', bookingDetails);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 sm:w-[25%]">Function Halls</h1>
      <div className="w-full">
        <div className="lg:w-full sm:w-[25%]">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="flex w-full">
          <div className="grid grid-cols-1 m-5 md:grid-cols-4 gap-4">
            {data.map(hall => (
              <HallCard key={hall.id} hall={hall} onSelect={() => setSelectedHall(hall)} />
            ))}
          </div>
          {selectedHall && <BookingForm onBookingSubmit={handleBookingSubmit} />}
        </div>
      </div>
    </div>
  );
};

export default FunctionHalls;

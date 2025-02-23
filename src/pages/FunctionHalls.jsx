import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import XLSX library
import Filter from '../components/Filter';
import HallCard from '../components/HallCard';
import BookingForm from '../components/BookingForm';

const FunctionHalls = () => {
  const [data, setData] = useState([]); // Holds the fetched data
  const [selectedHall, setSelectedHall] = useState(null); // Holds the selected hall details

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const fetchData = async () => {
    const excelUrl ='https://docs.google.com/spreadsheets/d/1a0d2bPF_dMYLnXHpIta5t0mk24GSWlHq8qQubuTITCU/export?format=xlsx';

    try {
      const response = await fetch(excelUrl);
      if (!response.ok) throw new Error('Failed to fetch the Excel file.');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      console.log(sheetData);
   
      const fetchedData = sheetData.map(item => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        location: item.location,
        price: item.price,
        rating: item.rating,
        description: item.description,
      }));

      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching or parsing the Excel file:', error);
    }
  };

  const handleFilterChange = (filterType, value) => {
    console.log(`Filter applied: ${filterType} = ${value}`);
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
              <HallCard
                key={hall.id}
                hall={hall}
                onSelect={() => setSelectedHall(hall)}
              />
            ))}
          </div>
          {selectedHall && (
            <BookingForm hall={selectedHall} onBookingSubmit={handleBookingSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FunctionHalls;

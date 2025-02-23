import React, { useState, useEffect } from 'react';

const FunctionHalls = () => {
  const [halls, setHalls] = useState([]);
  const [filters, setFilters] = useState({
    capacity: '',
    budget: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          name: 'Grand Royal Hall',
          description: 'A luxurious hall perfect for weddings and big events.',
          capacity: 300,
          price: 2000,
          image: 'https://www.eternalweddingz.in/storage/venue_images/2SD9IgZgcBbudi7OOomN2P4Gg1Nw4EOF34IJCOCn.webp',
          foodType: 'Vegetarian'
        },
        {
          name: 'Elegant Event Space',
          description: 'Ideal for corporate events and smaller gatherings.',
          capacity: 150,
          price: 1200,
          image: 'https://sportsfacilities.com/wp-content/uploads/2018/02/shutterstock_538382059-1024x683.jpg',
          foodType: 'Non-Vegetarian'
        },
        {
          name: 'Sunset Garden Hall',
          description: 'A beautiful garden setting for outdoor events.',
          capacity: 250,
          price: 1800,
          image: 'https://content.jdmagicbox.com/comp/vijayawada/v8/0866px866.x866.200106190326.h3v8/catalogue/nova-wellness-gayatri-nagar-vijayawada-body-massage-centres-vwk3b16cpa.jpg',
          foodType: 'Vegetarian & Non-Vegetarian'
        }
      ];
      setHalls(data); // Set the mock data
    };
    fetchData();
  }, []);

  const applyFilters = () => {
    // Implement filter logic based on capacity, budget, etc.
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Filters Section */}
      <div className="w-full p-4 bg-blue-500 text-gray text-center">
        <h1 className="text-2xl font-bold font-jost text-white">Find Your Perfect Function Hall</h1>
        <div className="flex flex-wrap w-full sm:w-[48%] bg-white text-gray-600 justify-center mt-4">
  {/* First row */}
  <div className="flex w-full sm:flex-row">
    <input
      type="text"
      placeholder="Guest Capacity"
      className="flex-1 m-2 p-2 rounded-md outline-none focus:ring-0 w-full sm:w-auto"
      value={filters.capacity}
      onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
    />
    <input
      type="text"
      placeholder="Budget"
      className="flex-1 m-2 p-2 rounded-md outline-none focus:ring-0 w-full sm:w-auto"
      value={filters.budget}
      onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
    />
  </div>
  {/* Second row */}
  <div className="flex w-full sm:flex-row">
    <input
      type="date"
      className="flex-1 m-2 p-2 rounded-md outline-none focus:ring-0 w-full sm:w-auto"
      value={filters.date}
      onChange={(e) => setFilters({ ...filters, date: e.target.value })}
    />
    <input
      type="time"
      className="flex-1 m-2 p-2 rounded-md outline-none focus:ring-0 w-full sm:w-auto"
      value={filters.time}
      onChange={(e) => setFilters({ ...filters, time: e.target.value })}
    />
  </div>
</div>


      </div>
      <button
        onClick={applyFilters}
        className="ml-3 text-blue-400 mt-5 border font-jost border-cyan-700 ordinal py-2 px-10 rounded-lg hover:bg-blue-600 self-start text-left"
      >
        FILTERS
      </button>

      <div className="flex flex-wrap  mt-8 w-full border border-red-400 px-2">

        {halls.map((hall, index) => (
          <div
            key={index}
            className="max-w-md mx-3 ml-6 bg-white rounded-lg shadow-lg overflow-hidden m-2"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800">{hall.name}</h2>

              {/* Location */}
              <div className="mt-2 flex items-center text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 20a1 1 0 01-.71-.29C5.7 16.61 3 12.86 3 9.5A7 7 0 0117 9.5c0 3.36-2.7 7.11-6.29 10.21A1 1 0 0110 20zm0-11a2 2 0 100 4 2 2 0 000-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Borivali, Mumbai
              </div>

              {/* Hall Type */}
              <div className="mt-2 flex items-center text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-2 0V3H9v15a1 1 0 01-2 0V2z"
                    clipRule="evenodd"
                  />
                </svg>
                Banquet Halls
              </div>

              {/* Capacity */}
              <div className="mt-2 flex items-center text-pink-600 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm2 2h8v8H6V5zm-1 1v8h2V6H5zm9 0v8h2V6h-2z" />
                </svg>
                {hall.capacity} PAX
              </div>

              {/* Pricing */}
              <div className="mt-4">
                <span className="text-lg font-semibold text-green-600">
                  ₹{hall.price}
                </span>{" "}
                <span className="text-sm text-gray-500">Onwards</span>
              </div>

              {/* Food Type */}
              <div className="mt-2">
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {hall.foodType}
                </span>
              </div>

              {/* Button */}
              <div className="mt-4">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionHalls;

import React from 'react';

const HallCard = ({ hall }) => {
  const reviewCount = hall.rating * 40;

  // Generate star ratings dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const maxStars = 5;
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {Array.from({ length: maxStars - fullStars }, (_, i) => (
          <span key={i + fullStars} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  return (
    <div className="font-jost sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col h-full max-h-[500px] overflow-y-auto">
        <img
          src={hall.imageUrl || 'https://via.placeholder.com/150'}
          alt={hall.title || 'Hall Image'}
          className="w-full h-32 object-cover rounded-md"
          loading="lazy"
        />
        <h3 className="text-xl font-semibold mt-4 min-h-[48px]">{hall.title || 'No Title Available'}</h3>
        <p className="text-blue-600 mt-1 flex-grow text-justify">{hall.location || 'Location not specified'}</p>
        <p className="text-gray-600 mt-2 flex-grow">{hall.description || 'No description provided'}</p>
        
        <div className="flex items-center mb-4">
          {renderStars(hall.rating || 0)}
          <span className="ml-2 text-gray-600">{`${reviewCount} reviews`}</span>
        </div>

        <p className="font-bold mt-2">{`Price: $${hall.price || 'N/A'}`}</p>
        
        <a
          href={`/details/function-halls/${hall.id}`}
          className="mt-4 block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default HallCard;

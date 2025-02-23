import React from 'react';

const Card = ({ title, description, img, link }) => (
  <a 
    href={link} 
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
  >
    {img && (
      <img 
        className=" lg:ml-2 object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
        src={img} 
        alt={title} 
      />
    )}
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
    </div>
  </a>
);

export default Card;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Ensure this package is installed
import './loader.css';

const Details = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const excelUrl = 'https://docs.google.com/spreadsheets/d/1a0d2bPF_dMYLnXHpIta5t0mk24GSWlHq8qQubuTITCU/export?format=xlsx';

    try {
      const response = await fetch(excelUrl);
      if (!response.ok) throw new Error('Failed to fetch the Excel file.');

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const hall = jsonData.find((item) => item.id === parseInt(id, 10)); // Match by `id`
      if (hall) {
        setData({
          id: hall.id,
          title: hall.title,
          imageUrl: hall.imageUrl,
          imageUrl2: hall.imageUrl2,
          imageUrl3: hall.imageUrl3,
          location: hall.location,
          price: hall.price,
          detailes: hall.detailes,
          rating: hall.rating,
        });
        setCurrentImage(hall.imageUrl);
      } else {
        console.error('No matching hall found for the given ID.');
      }
    } catch (error) {
      console.error('Error fetching or processing the Excel file:', error);
    }
  };

  const changeImage = (src) => {
    setCurrentImage(src);
  };

  if (!data) {
    return (
      <div className="relative w-20 mx-auto mt-20 h-64 justify-center">
        <span className="absolute bottom-0 w-4 h-4 bg-purple-600 rounded-full translate-x-16 animate-loading">
          <span className="absolute w-full h-full bg-purple-200 rounded-full animate-loading2"></span>
        </span>
      </div>
    );
  }

  const reviewCount = data.rating * 40;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={currentImage}
              alt="Product"
              className="rounded-lg shadow-md mb-4 md:w-[550px] md:h-[300px] sm:w-[300px] sm:h-[180px] w-[250px] h-[150px]"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {[data.imageUrl, data.imageUrl2, data.imageUrl3].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`image ${idx + 1}`}
                  className="w-[60px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[60px] object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(src)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
            <p className="text-gray-600 mb-4">{data.location}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${data.price}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {'★'.repeat(data.rating)}{'☆'.repeat(5 - data.rating)}
              </span>
              <span className="ml-2 text-gray-600">{data.rating} ({reviewCount} reviews)</span>
            </div>
            <p className="text-gray-700 mb-6 text-justify">{data.detailes}</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

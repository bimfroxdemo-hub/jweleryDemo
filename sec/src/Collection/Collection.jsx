import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const Collection = () => {
  const images = [
    { id: 1, title: "Necklace", material: "22k Gold", path: "11.png" },
    { id: 2, title: "Necklace", material: "22k Gold", path: "12.png" },
    { id: 3, title: "Necklace", material: "22k Gold", path: "13.png" },
    { id: 4, title: "Necklace", material: "22k Gold", path: "14.png" },
    { id: 5, title: "Necklace", material: "22k Gold", path: "15.png" },
    { id: 6, title: "Necklace", material: "22k Gold", path: "16.png" },
    { id: 7, title: "Necklace", material: "22k Gold", path: "17.png" },
    { id: 8, title: "Necklace", material: "22k Gold", path: "1.png" },
    { id: 9, title: "Necklace", material: "20k Gold", path: "2.png" },
  ];

  return (
    <>
      {/* Heading */}
      <div className="items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mt-20 flex items-center justify-center gap-3.5">
          Our <span className="text-yellow-500">Collections</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Discover our curated collections, each designed to celebrate different moments
          <p>and styles in your life journey</p>
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-10 mt-12">
        {images.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md transition duration-300 p-4 text-center group"
          >
            {/* Image with overlay hover */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.path}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>

            {/* Material Info */}
            <div className="flex justify-between items-center text-sm sm:text-base mb-4 px-2 mt-2">
              <span className="font-bold text-gray-800">Material:</span>
              <span className="text-gray-600">{item.material}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
            
              <a
                href="https://wa.me/919876543210" // 👉 apna WhatsApp number yahan daalo (91 ke saath)
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-2 rounded-lg shadow-md transition duration-300"
              >
                <FaWhatsapp className="text-lg" /> Inquiry Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;

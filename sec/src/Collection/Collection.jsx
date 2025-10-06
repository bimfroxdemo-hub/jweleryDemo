import React from "react";
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
    <section className="px-4 sm:px-6 md:px-10 py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Our <span className="text-yellow-500">Collections</span>
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Discover our curated collections, each designed to celebrate
          <br className="hidden sm:block" />
          different moments and styles in your life journey.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {images.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md transition duration-300 hover:shadow-xl p-4 text-center group"
          >
            {/* Image with overlay hover */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.path}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold mt-4">
              {item.title}
            </h2>

            {/* Material Info */}
            <div className="flex justify-center items-center text-sm sm:text-base mt-2 mb-4 gap-1 sm:gap-2">
              <span className="font-semibold text-gray-800">Material:</span>
              <span className="text-gray-600">{item.material}</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg shadow-md transition duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <FaWhatsapp className="text-lg" /> Inquiry Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

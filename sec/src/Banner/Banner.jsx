import React from "react";

const Banner = () => {
  return (
    // 👇 we’ll make height slightly smaller on mobile
    <div className="relative h-[calc(60vh-40px)] sm:h-[80vh] md:h-screen w-full">
      {/* Background Image with Light Blur */}
      <img
        src="bg.png"
        alt="Banner logo"
        className="h-full w-full object-cover blur-xs"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 z-10">
        {/* Heading */}
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 leading-snug">
          Jewellery - Brand
        </p>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg max-w-xl md:max-w-3xl font-medium mb-6">
          Crafted for Generations, Designed for You. <br />
          Discover our exquisite collection of fine jewelry,
          where timeless elegance meets contemporary sophistication.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 hover:bg-green-500 text-white px-5 sm:px-6 py-3 rounded-full shadow-lg font-medium transition text-sm sm:text-base"
          >
            Chat on WhatsApp
          </a>

          <button className="border-2 px-5 sm:px-6 py-3 rounded-full text-white border-white hover:bg-white hover:text-black transition text-sm sm:text-base">
            Explore Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

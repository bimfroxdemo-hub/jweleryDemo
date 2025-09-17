import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-zinc-800 text-white flex flex-col sm:flex-row items-center sm:justify-between p-4 sm:h-12 fixed top-0 z-50">
      {/* Logo */}
      <a href="#home" className="text-lg sm:text-xl font-bold mb-1 sm:mb-0">
        Jewellery-Shop
      </a>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm sm:text-base font-medium mt-2 sm:mt-0">
        <a href="#home" className="hover:text-yellow-400 transition">Home</a>
        <a href="#collection" className="hover:text-yellow-400 transition">Collection</a>
        <a href="#review" className="hover:text-yellow-400 transition">Review</a>
        <a href="#about" className="hover:text-yellow-400 transition">About</a>
        <a href="#visit" className="hover:text-yellow-400 transition">Visit</a>
      </div>
    </div>
  );
};

export default Navbar;

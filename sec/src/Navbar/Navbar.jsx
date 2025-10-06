import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-zinc-800 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#home" className="text-lg sm:text-xl font-bold">
          Jewellery-Shop
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-sm sm:text-base font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#collection" className="hover:text-yellow-400 transition">Collection</a>
          <a href="#review" className="hover:text-yellow-400 transition">Review</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#visit" className="hover:text-yellow-400 transition">Visit</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center bg-zinc-900 text-white py-4 space-y-3 border-t border-zinc-700">
          <a href="#home" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#collection" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Collection</a>
          <a href="#review" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Review</a>
          <a href="#about" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#visit" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Visit</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

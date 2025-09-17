import React from "react";
import Visitcard from "./Visitcard";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Visit = () => {
  return (
    <div className="bg-white py-16 px-6">
      {/* Parent Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
            Visit <span className="text-yellow-500">Our Showroom</span>
          </h2>
          <p className="text-gray-700 mb-8 text-center lg:text-left">
            Experience the Aurora Jewels collection in person. Our expert
            consultants are ready to help you find the perfect piece or create
            something uniquely yours.
          </p>

          {/* Visit Cards */}
          <Visitcard />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center w-full">
          {/* Top Cream Box with Icon */}
          <div className="bg-amber-100 w-full flex flex-col items-center justify-center py-10 rounded-t-2xl">
            <IoLocationSharp className="text-red-500 text-6xl mb-2" />
            <p className="text-gray-700 font-medium text-center px-4">
              123 Jewelry District, Mumbai, Maharashtra 400001
            </p>
          </div>

          {/* White Content Box */}
          <div className="bg-white w-full shadow-md rounded-b-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Visit Us Today
            </h3>
            <p className="text-gray-600 mb-6">
              Step into our elegant showroom where you can touch, feel, and try
              on our exquisite collections. Our jewelry consultants will guide
              you through our heritage pieces and help you find the perfect
              match for your style and occasion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.google.com/maps/place/Mumbai,+Maharashtra/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black px-6 py-3 rounded-lg font-medium shadow hover:bg-amber-600 transition"
              >
                Get Directions
              </a>
              <button className="bg-white border border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-amber-500 hover:text-white transition">
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Instagram Section (Right Aligned on Desktop) */}
          <div className="mt-10 w-full flex justify-center lg:justify-end">
            <div className="text-center lg:text-right">
              <p className="text-2xl font-bold mb-4">Follow Our Journey</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 font-medium text-lg hover:text-yellow-600 border-2 border-gray-200 px-4 py-2 rounded-lg transition"
              >
                <FaInstagramSquare className="text-3xl" />
                @Bimfrox
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <div className="mt-16 flex justify-center px-4">
        {/* Gradient border wrapper */}
        <div className="relative bg-gradient-to-r from-yellow-800 via-yellow-400 to-white p-[2px] rounded-2xl w-full max-w-2xl">
          {/* Inner box */}
          <div className="bg-amber-50 rounded-2xl text-center py-10 px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Start Your Jewelry Journey?
            </h2>
            <p className="text-black mb-8">
              Connect with our jewelry experts on WhatsApp for instant
              assistance, collection previews, and personalized recommendations.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/919876543210" // apna WhatsApp number yaha daalo
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;

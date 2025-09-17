import React from 'react'
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail, MdWatchLater } from "react-icons/md";

const Visitcard = () => {
  const cards = [
    {
      icon: <IoCallOutline className="text-yellow-500 text-5xl mx-auto" />,
      title: "Call Us",
      description: "+91 98765 43210 | +91 98765 43211"
    },
    {
      icon: <MdOutlineEmail className="text-yellow-400 text-5xl mx-auto" />,
      title: "Email Us",
      description: "bimfrox@gmail.com"
    },
    {
      icon: <IoLocationSharp className="text-red-500 text-5xl mx-auto" />,
      title: "Visit Our Showroom",
      description: "123 Jewelry District, Mumbai, Maharashtra 400001"
    },
    {
      icon: <MdWatchLater className="text-blue-500 text-5xl mx-auto" />,
      title: "Business Hours",
      description: "Mon-Sat: 10:00 AM - 8:00 PM | Sun: 11:00 AM - 6:00 PM"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 px-4 max-w-5xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md 
                     hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="mb-4">{card.icon}</div>
          <p className="font-bold text-lg mb-2 text-gray-800">{card.title}</p>
          <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Visitcard

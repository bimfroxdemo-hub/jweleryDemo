import React from 'react';
import { AiFillGold } from "react-icons/ai";
import { IoMdMedal } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { FcDataProtection } from "react-icons/fc";

const AboutsCard = () => {
  const cards = [
    {
      icon: <AiFillGold className="text-yellow-500 text-5xl mx-auto" />,
      title: "Certified Gold",
      description: "Every gold comes with authentic certification"
    },
    {
      icon: <IoMdMedal className="text-yellow-400 text-5xl mx-auto" />,
      title: "Award Winning",
      description: "Recognized globally for quality and design"
    },
    {
      icon: <MdOutlineWatchLater className="text-blue-500 text-5xl mx-auto" />,
      title: "Timely Delivery",
      description: "We ensure fast and safe delivery for all orders"
    },
    {
      icon: <FcDataProtection className="text-5xl mx-auto" />,
      title: "Data Protection",
      description: "Your personal information is always secure with us"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="mb-4">{card.icon}</div>
          <p className="font-bold text-lg mb-2">{card.title}</p>
          <p className="text-sm sm:text-base text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutsCard;

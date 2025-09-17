import React from "react";
import { FaStar, FaTruck } from "react-icons/fa";
import { SiProteus } from "react-icons/si";
import { IoColorPalette } from "react-icons/io5";

const Whychoose = () => {
  const features = [
    {
      id: 1,
      icon: <FaStar className="text-yellow-400 text-5xl mb-4" />,
      title: "Lifetime Polishing & Maintenance",
      desc: "Keep your jewelry looking brilliant forever with our complimentary lifetime polishing and maintenance service.",
    },
    {
      id: 2,
      icon: <SiProteus className="text-yellow-400 text-5xl mb-4" />,
      title: "100% Certified Jewelry",
      desc: "Every piece comes with authentic certification for diamonds and hallmark guarantee for gold, ensuring your investment's value.",
    },
    {
      id: 3,
      icon: <IoColorPalette className="text-yellow-400 text-5xl mb-4" />,
      title: "Custom Design Service",
      desc: "Create your dream jewelry with our bespoke design service tailored to your unique style.",
    },
    {
      id: 4,
      icon: <FaTruck className="text-yellow-400 text-5xl mb-4" />,
      title: "Global Shipping Available",
      desc: "Secure and insured worldwide delivery brings Aurora Jewels to your doorstep, wherever you are in the world.",
    },
  ];

  return (
    <>
      {/* Heading */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-yellow-500">Our Jewels</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Experience the Aurora difference with our commitment to excellence,
          authenticity, and customer satisfaction.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-6 md:px-16">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 text-center cursor-pointer"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-yellow-600">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex justify-center px-4 mb-8">
  {/* Gradient border wrapper */}
  <div className="relative bg-gradient-to-r from-yellow-800 via-yellow-400 to-white p-[2px] rounded-2xl w-full max-w-3xl">
    {/* Inner box */}
    <div className="bg-amber-90 rounded-2xl text-center py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Ready to Discover Your Perfect Piece?
      </h2>
      <p className="text-balck mb-8">
        Let our jewelry experts help you find or create the perfect piece that
        captures your unique style and story.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
          Book Consultation
        </button>
        <button className="border border-black text-black px-6 py-3 rounded-lg shadow-md hover:bg-black hover:text-white transition">
          Explore More
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Whychoose;

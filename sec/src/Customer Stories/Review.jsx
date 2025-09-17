import React from "react";
import { FaCommentDots, FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      type: "Wedding Jewelry",
      comment:
        "Our jewelry made my wedding absolutely unforgettable. The bridal set was beyond my dreams - every detail was perfect. The craftsmanship is exceptional and the team's attention to my vision was remarkable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ananya Verma",
      location: "Bangalore",
      type: "Bridal Collection",
      comment:
        "I felt like a queen on my big day. The detailing was exquisite, and I received endless compliments. Truly a masterpiece.",
      rating: 5,
    },
    {
      id: 3,
      name: "Simran Kaur",
      location: "Chandigarh",
      type: "Necklace Set",
      comment:
        "The design was modern yet elegant. It perfectly matched my outfit and added a royal touch to the occasion.",
      rating: 5,
    },
    {
      id: 4,
      name: "Raj Patel",
      location: "Delhi",
      type: "Engagement Ring",
      comment:
        "The engagement ring was stunning. My fiancée loved it beyond words. Thank you for making this special moment unforgettable.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-amber-50 py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        What Our <span className="text-yellow-500">Clients Say</span>
      </h2>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <FaCommentDots className="text-yellow-500 text-4xl" />
            </div>

            {/* Comment */}
            <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <hr className="my-3" />

            {/* Reviewer Info */}
            <p className="font-semibold">{review.name}</p>
            <p className="text-gray-500 text-sm">{review.location}</p>
            <p className="text-yellow-500 font-medium mt-1">{review.type}</p>
          </div>
        ))}
        
        
      </div>

      
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-13 px-6">
  {/* Stat 1 */}
  <div>
    <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-600">1500+</h3>
    <p className="text-gray-700 text-lg mt-2">Happy Families</p>
  </div>

  {/* Stat 2 */}
  <div>
    <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-600">4.9/5</h3>
    <p className="text-gray-700 text-lg mt-2">Customer Rating</p>
  </div>

  {/* Stat 3 */}
  <div>
    <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-600">25+</h3>
    <p className="text-gray-700 text-lg mt-2">Years Experience</p>
  </div>

  {/* Stat 4 */}
  <div>
    <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-600">100%</h3>
    <p className="text-gray-700 text-lg mt-2">Certified Jewelry</p>
  </div>
</div>

    </div>
  );
};

export default Review;

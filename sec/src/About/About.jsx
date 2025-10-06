import React from 'react';
import AboutsCard from '../AboutsCard/AboutsCard';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row  mx-4 lg:mx-18 gap-10">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* ✅ Center on mobile, left on desktop */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Our <span className="text-yellow-500">Legacy</span>
        </h1>
        <p className="mt-4 mb-5 text-base sm:text-lg">
          For over two decades, Aurora Jewels has been synonymous with exceptional craftsmanship
          and timeless elegance. Our master artisans blend traditional techniques with contemporary
          design, creating pieces that tell your unique story.
        </p>
        <p className="text-base sm:text-lg mb-6">
          Each piece in our collection represents hours of meticulous work, from the initial
          design concept to the final polish. We believe that fine jewelry is not just an accessory—
          it's a legacy that passes from generation to generation.
        </p>

        <AboutsCard />
      </div>

      {/* Right Side - Image with Overlay */}
      <div className="relative w-full lg:w-1/2 flex itmes-center justify-center mt-4 ">
        <img
          src="aboutimg.png"
          alt="logo"
          className="w-full h-64 sm:h-96 lg:h-[32rem] rounded-2xl object-cover"
        />

        {/* Bottom White Box */}
        <div className="absolute fix-top left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md w-10/11 sm:w-[98%] border-2 border-gray-200 rounded-xl px-4 sm:px-6 py-4 mt-2 text-center shadow-lg">
          <p className="text-xl sm:text-2xl font-bold text-black">
            Master Craftsmanship
          </p>
          <p className="text-sm sm:text-base text-black ">
            Every piece is handcrafted by our skilled artisans using traditional
            techniques passed down through generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

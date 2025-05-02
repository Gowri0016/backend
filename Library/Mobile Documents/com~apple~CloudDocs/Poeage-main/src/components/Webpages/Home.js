import React from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/quotes');
  }

  return (
    <div className="relative top-24 z-10 flex flex-col justify-center items-center w-full min-h-screen text-white px-4 text-center space-y-6 md:space-y-10 max-w-screen-md mx-auto">
      
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Crafting Digital Experiences with Impact
      </h1>
      <h2 className="text-blue-500 font-bold text-xl md:text-2xl">Design. Develop. Deliver.</h2>

      {/* Description */}
      <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed md:text-2xl">
        At <span className="font-bold text-blue-400">Poeage</span>, we blend clean code with captivating design to build 
        memorable digital products. From intuitive interfaces to sleek animations, every pixel is crafted with purpose.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center mt-4">
        <a href="https://x.com/PoeageCom" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
           className="group p-3 md:p-4 bg-gray-800 rounded-full hover:ring-2 hover:ring-blue-400 transition">
          <TwitterIcon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-blue-400 transition" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61575707375728" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
           className="group p-3 md:p-4 bg-gray-800 rounded-full hover:ring-2 hover:ring-blue-500 transition">
          <FacebookIcon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-blue-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/poeage/"
           aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
           className="group p-3 md:p-4 bg-gray-800 rounded-full hover:ring-2 hover:ring-blue-600 transition">
          <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-blue-600 transition" />
        </a>
        <a href="https://www.instagram.com/poeage_com?igsh=ZG02cDRyMDluNHFk" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
           className="group p-3 md:p-4 bg-gray-800 rounded-full hover:ring-2 hover:ring-pink-500 transition">
          <InstagramIcon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-pink-500 transition" />
        </a>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-semibold bg-blue-800 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
        >
          Request a Design Quote <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

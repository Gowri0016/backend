import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Notfound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent opacity-10 animate-pulse blur-3xl z-0" />

      {/* 404 Header with Bounce Animation */}
      <motion.h1 
        className="text-7xl sm:text-8xl font-black mb-4 z-10 drop-shadow-lg text-blue-400"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1.1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        404
      </motion.h1>

      {/* Secondary Text with Slide-in Animation */}
      <motion.h2 
        className="text-xl sm:text-2xl mb-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Message Text */}
      <motion.p 
        className="mb-8 text-gray-400 max-w-md text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        The page you're looking for doesn't exist, or it has been moved.
      </motion.p>

      {/* Hover Effects Section with New Design Options */}
      <motion.div className="z-10 flex gap-6">
        <Link 
          to="/" 
          className="relative px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all transform hover:rotate-3"
        >
          <span className="relative z-10">Go Back Home</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-400 opacity-40 blur-xl scale-110 hover:animate-pulse"></span>
        </Link>

        <Link 
          to="/" 
          className="relative px-6 py-3 bg-transparent border-2 border-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10">Take Me Home</span>
          <span className="absolute inset-0 bg-blue-600 opacity-20 blur-xl scale-110 hover:animate-pulse"></span>
        </Link>

        <Link 
          to="/" 
          className="relative px-6 py-3 bg-transparent border-2 border-pink-600 text-pink-600 font-semibold rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10">Return to Safety</span>
          <span className="absolute inset-0 bg-pink-400 opacity-30 blur-xl scale-110 hover:animate-pulse"></span>
        </Link>
      </motion.div>

    </div>
  );
}

export default Notfound;

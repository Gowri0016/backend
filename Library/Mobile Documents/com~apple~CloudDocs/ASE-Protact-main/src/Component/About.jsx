import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaBoxOpen, FaStar } from 'react-icons/fa';

export default function About() {
  const stats = [
    { label: '100% Quality', icon: <FaCheckCircle className="text-green-500 text-3xl" /> },
    { label: '24/7 Support', icon: <FaClock className="text-blue-500 text-3xl" /> },
    { label: '500+ Products', icon: <FaBoxOpen className="text-yellow-500 text-3xl" /> },
    { label: '5-Star Rated', icon: <FaStar className="text-orange-500 text-3xl" /> },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-red-50 py-16 px-6">
      {/* Company Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">About ASE Protact</h2>
        <p className="text-gray-700 text-lg">
          We are a trusted provider of fire safety equipment based in Tiruppur District, delivering top-tier protective gear with unmatched quality and commitment.
        </p>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white max-w-3xl mx-auto text-center rounded-xl shadow-lg p-6 mb-14 border border-gray-200"
      >
        <h3 className="text-2xl font-semibold text-red-600 mb-2">Meet Our Founder</h3>
        <p className="text-lg font-medium text-gray-800">M.K. Selvan</p>
        <p className="text-sm text-gray-600 italic">Proprietor of ASE Protact</p>
        <p className="text-gray-600 mt-2">
          With a deep commitment to safety and service, Mr. Selvan leads ASE Protact to deliver reliable protection solutions across industries.
        </p>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md text-center py-6 px-3 border border-gray-200"
          >
            <div className="mb-2">{stat.icon}</div>
            <h4 className="font-semibold text-gray-800">{stat.label}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
       <Link to="/contact">
  <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:from-orange-600 hover:to-red-700 transition-all">
    Discover More Services
  </button>
</Link>
      </motion.div>
    </div>
  );
}

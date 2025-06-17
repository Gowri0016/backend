import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaFireExtinguisher,
  FaShieldAlt,
  FaBell,
  FaSearch,
  FaBroadcastTower,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Fire Alarm Installation',
    icon: <FaBell size={24} />,
    color: 'from-red-500 to-red-300',
    description:
      'Install reliable and certified fire alarm systems for buildings, factories, and residences.',
    steps: ['Site Survey', 'System Planning', 'Wiring & Setup', 'Testing & Handover'],
  },
  {
    id: 2,
    name: 'Protective Equipment Sales',
    icon: <FaShieldAlt size={24} />,
    color: 'from-orange-500 to-yellow-400',
    description:
      'Supply helmets, fire suits, gloves, boots, and more PPE across industries.',
    steps: ['Product Consultation', 'Bulk/Custom Order', 'Delivery', 'After-Sales Support'],
  },
  {
    id: 3,
    name: 'AMC & Maintenance',
    icon: <FaTools size={24} />,
    color: 'from-blue-500 to-blue-300',
    description:
      'Annual maintenance services for fire systems & equipment to ensure 24/7 readiness.',
    steps: ['Inspection Schedule', 'Routine Maintenance', 'System Upgrades', 'Renewal Reports'],
  },
  {
    id: 4,
    name: 'Evacuation Planning',
    icon: <FaFireExtinguisher size={24} />,
    color: 'from-green-500 to-green-300',
    description:
      'Prepare your team with custom evacuation strategies, drills, and mock training.',
    steps: ['Risk Assessment', 'Route Mapping', 'Team Training', 'Mock Drill Execution'],
  },
  {
    id: 5,
    name: 'Fire Safety Audits',
    icon: <FaSearch size={24} />,
    color: 'from-purple-500 to-pink-400',
    description:
      'Conduct comprehensive fire risk assessments and audits for compliance and prevention.',
    steps: ['On-site Evaluation', 'Hazard Identification', 'Audit Report', 'Recommendations'],
  },
  {
    id: 6,
    name: 'IoT Fire Monitoring Solutions',
    icon: <FaBroadcastTower size={24} />,
    color: 'from-indigo-500 to-sky-400',
    description:
      'Deploy smart, sensor-based systems for real-time monitoring and alerts.',
    steps: ['Requirement Analysis', 'Sensor Installation', 'App Integration', 'Live Monitoring'],
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-tr from-gray-100 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-3">
          Our Service Categories
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
          We deliver expert fire protection and safety services across Tiruppur and nearby districts — from installation to emergency planning and IoT monitoring.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Accent corner */}
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-bl-3xl z-10" />

            {/* Content */}
            <div className="relative z-20 p-5 sm:p-6">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <ul className="text-sm text-gray-700 space-y-1 border-l-2 pl-4 border-red-400">
                {service.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="relative before:content-[''] before:absolute before:left-[-0.65rem] before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-red-400"
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.08 }}
    className="px-6 sm:px-8 py-3 rounded-full font-medium bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:from-orange-700 hover:to-red-700 transition-all"
  >
    Request a Free Consultation
  </motion.button>
</Link>
      </motion.div>
    </div>
  );
}

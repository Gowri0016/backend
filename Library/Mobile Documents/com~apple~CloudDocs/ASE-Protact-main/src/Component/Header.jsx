import React, { useState } from 'react';
import { FaShieldAlt, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Asset/Logo.png'
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Contact', 'About'];

  return (
    <motion.header
      className="relative z-50 bg-white backdrop-blur-md text-black px-4 py-3 shadow-2xl"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Branding */}
        <div className="flex items-center space-x-3">
         <a href="/"><img className="text-2xl w-24 font-extrabold tracking-widest drop-shadow-sm" src={Logo} alt='Loading...!'>
            
          </img>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-orange-500/90 transition duration-300 font-medium backdrop-blur-md"
            >
              {item}
            </Link>
          ))}
          </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-3 flex flex-col gap-3 px-4 py-5 bg-black backdrop-blur-md rounded-xl shadow-inner text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded-md bg-white/10 hover:bg-orange-500/80 transition"
              >
                {item}
              </Link>
            ))}
            <FaBell size={22} className="text-yellow-300 animate-pulse mt-2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtext */}
      <p className="text-center mt-3 text-sm md:text-base italic text-black/90 tracking-wide">
        Your trusted partner in fire safety — innovate. protect. save lives.
      </p>
    </motion.header>
  );
}

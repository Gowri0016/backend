import React, { useContext } from "react";
import { DContext } from "../Datacontext/Datacontext";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "lucide-react";

const Footer = () => {
  const { navbar } = useContext(DContext);

  return (
    <footer className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700 text-white text-center lg:text-left relative p-10 overflow-hidden">
      {/* Floating Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
          animate={{ x: [0, 250, -250, 0], y: [0, -150, 150, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

     {/* About Us Section - Centered */}
<section className="container mx-auto py-10 px-6 flex justify-center relative z-10">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 shadow-xl text-gray-200 rounded-2xl p-10 max-w-4xl w-full text-center transition-all duration-300"
  >
    <h6 className="uppercase font-bold text-3xl mb-6 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
      About Us
    </h6>
    <p className="text-gray-300 leading-relaxed">
      Welcome to <span className="text-pink-500 font-semibold">Poeage</span>, your trusted partner in innovative web development and IT solutions. 
      We specialize in building scalable, secure, and high-performance digital experiences. 
      Our visionary founder, <span className="text-pink-500 hover:text-pink-600">Mr. Gowrishankar</span>, leads our mission to transform the digital world with creativity and precision.
    </p>
  </motion.div>
</section>


<section className="container mx-auto py-10 px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Services */}
  <motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-gray-900 shadow-lg text-gray-200 rounded-2xl p-8 col-span-1 lg:col-span-1 transition-all duration-300 flex flex-col h-full"
>
<h6 className="uppercase font-bold text-3xl mb-6 text-left text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
  What We Do
</h6>
<ul className="space-y-4 text-gray-300 flex-1">
  <li className="flex items-start space-x-3">
    <span className="font-semibold text-blue-500">Web Apps:</span>
    <span>Modern, responsive websites that perform.</span>
  </li>
  <li className="flex items-start space-x-3">
    <span className="font-semibold text-blue-500">Mobile Apps:</span>
    <span>Custom iOS & Android apps for your goals.</span>
  </li>
  <li className="flex items-start space-x-3">
    <span className="font-semibold text-blue-500">Maintenance:</span>
    <span>Ongoing support, updates, and uptime.</span>
  </li>
  <li className="flex items-start space-x-3">
    <span className="font-semibold text-blue-500">IT Strategy:</span>
    <span>Smart solutions to boost efficiency.</span>
  </li>
  <li className="flex items-start space-x-3">
    <span className="font-semibold text-blue-500">Data Security:</span>
    <span>Protecting what matters most—your data.</span>
  </li>
</ul>

</motion.div>


  {/* Contact */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 shadow-lg text-gray-200 rounded-2xl p-8 col-span-1 lg:col-span-1 transition-all duration-300"
  >
    <h6 className="uppercase font-bold text-3xl mb-4 text-left text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
      Contact Us
    </h6>
    <ul className="space-y-4 text-gray-300">
      <li className="flex items-center space-x-3">
        <MailIcon className="w-5 h-5 text-pink-500" />
        <a href="mailto:info@poeage.com" className="hover:text-pink-500">info@poeage.com</a>
      </li>
      <li className="flex items-center space-x-3">
        <PhoneIcon className="w-5 h-5 text-green-500" />
        <a href="tel:7358039616" className="hover:text-green-600">73580-39616</a>
        <span>/</span>
        <a href="tel:8056889616" className="hover:text-green-600">80568-89616</a>
      </li>
      <li className="flex items-center space-x-3">
        <MessageCircleIcon className="w-5 h-5 text-green-600" />
        <a href="https://wa.me/917358039616" className="hover:text-green-600">WhatsApp</a>
      </li>
      <li className="flex items-center space-x-3">
        <InstagramIcon className="w-5 h-5 text-pink-500" />
        <a href="https://www.instagram.com/poeage_com?igsh=ZG02cDRyMDluNHFk" className="hover:text-pink-500">Instagram</a>
      </li>
      <li className="flex items-center space-x-3">
        <LinkedinIcon className="w-5 h-5 text-blue-700" />
        <a href="https://www.linkedin.com/in/poeage/" className="hover:text-blue-700">LinkedIn</a>
      </li>
      <li className="flex items-center space-x-3">
        <TwitterIcon className="w-5 h-5 text-sky-500" />
        <a href="https://x.com/PoeageCom" className="hover:text-sky-500">Twitter</a>
      </li>
      <li className="flex items-center space-x-3">
        <FacebookIcon className="w-5 h-5 text-blue-600" />
        <a href="https://www.facebook.com/profile.php?id=61575707375728" className="hover:text-blue-600">Facebook</a>
      </li>
    </ul>
  </motion.div>
</section>

  {/* Location */}
  <motion.div
    className="bg-gray-900 shadow-lg text-gray-200 rounded-2xl p-8 col-span-1 lg:col-span-1 transition-all duration-300 flex flex-col justify-between"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h6 className="uppercase font-bold text-3xl mb-4 text-left text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
      Live Location
    </h6>
    <div className="flex-grow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9300.905047505299!2d77.54026110259773!3d11.440255099117984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93fe013ef4605%3A0xba11f0c512bc0213!2sAyyampalayam%2C%20Tamil%20Nadu%20638455!5e0!3m2!1sen!2sin!4v1736442655282!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="bg-transparent text-center py-4 text-gray-400 z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2025 Poeage.com All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
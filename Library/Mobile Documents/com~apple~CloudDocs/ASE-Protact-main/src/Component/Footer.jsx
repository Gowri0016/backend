import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="relative bg-gradient-to-tr from-black via-red-800 to-orange-700 text-white pt-10">
      {/* SVG Wave Top */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,154.7C840,149,960,75,1080,58.7C1200,43,1320,85,1380,106.7L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 py-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-700 drop-shadow-md">
          ASE Protact
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-base text-white/80 leading-relaxed">
          <span className="text-white font-medium">ASE Protact</span> is your trusted partner in
          fire safety solutions—from gear and protective equipment to advanced suppression
          technology. Follow us for updates and safety tips.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 6 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 text-white transition"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid gap-4 sm:grid-cols-3 text-sm max-w-4xl mx-auto mb-10 text-white/80">
          <div>
            <h4 className="font-semibold text-white mb-1">📞 Contact</h4>
            <a href="tel:+919384593993" className="hover:underline text-white/80">
              +91 938-459-3993
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">📧 Email</h4>
            <p>aseprotact@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">📍 Address</h4>
            <p className="text-sm text-white">
  SMP Tower, 2nd Street, SAP Theater Back Side, Avinashi Road, Tiruppur, Tamil Nadu – 641603, India
</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/30 pt-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-white">ASE Protact</span>. All rights reserved.
          </p>
          <p className="mt-1 text-white/70">
            Built with ❤️ by <span className="font-semibold text-orange-300">Poeage IT Solution</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = ({ user_name, user_email, user_phone, message }) => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user_name || !nameRegex.test(user_name))
      newErrors.user_name = 'Enter a valid name (min 2 letters).';
    if (!user_email || !emailRegex.test(user_email))
      newErrors.user_email = 'Enter a valid email address.';
    if (!user_phone || !phoneRegex.test(user_phone))
      newErrors.user_phone = 'Enter a valid 10-digit Indian phone number.';
    if (!message || message.trim().length < 5)
      newErrors.message = 'Message should be at least 5 characters.';

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');

    const form = formRef.current;
    if (!form) return setStatus('Form not available.');

    const formData = {
      user_name: form.user_name.value.trim(),
      user_email: form.user_email.value.trim(),
      user_phone: form.user_phone.value.trim(),
      message: form.message.value.trim(),
    };

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setStatus('Sending...');

    emailjs
      .sendForm('service_5lxmqcn', 'template_vixtzz7', form, 'W6HYSAjaPwBPPrWp2')
      .then(() => {
        setStatus('✅ Message sent successfully!');
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus('❌ Failed to send. Please try again.');
      });
  };

  const renderError = (field) =>
    errors[field] && <p className="text-sm text-red-600 mt-1">{errors[field]}</p>;

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-red-100 min-h-screen py-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/60 border border-red-200 shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-4xl"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="flex justify-center mb-3"
          >
            <div className="bg-red-100 rounded-full p-3 shadow-inner">
              <FaFire size={32} className="text-red-600 animate-bounce" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-wide mb-2">
            Let’s Connect
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Need help with fire safety or services? We're ready to assist you!
          </p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <label className="block mb-1 text-gray-800 font-medium">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            />
            {renderError('user_name')}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <label className="block mb-1 text-gray-800 font-medium">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            />
            {renderError('user_email')}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <label className="block mb-1 text-gray-800 font-medium">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="9876543210"
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            />
            {renderError('user_phone')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <label className="block mb-1 text-gray-800 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            ></textarea>
            {renderError('message')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 text-center"
          >
            <button
              type="submit"
              disabled={status === 'Sending...'}
              className={`bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 ${
                status === 'Sending...'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-105 hover:from-orange-600 hover:to-red-700'
              }`}
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="mt-4 text-sm text-gray-800">{status}</p>}
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}


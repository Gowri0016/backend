import React, { useState } from "react";
import emailjs from "emailjs-com";

const Getquotes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name must start with uppercase and use only letters/spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Must be 10 digits starting with 6-9";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (!/^[A-Za-z\s.,'!?()"-]+$/.test(formData.message)) {
      newErrors.message = "Only text and punctuation allowed";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ sending: true, success: null });

    emailjs
      .send("service_v64n5p6", "template_abgnxru", formData, "woqdTWdPjegdzu3os")
      .then(() => {
        setStatus({ sending: false, success: true });
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
      })
      .catch(() => {
        setStatus({ sending: false, success: false });
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-3xl bg-white border border-blue-100 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
        {/* Decorative gradient corners */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-tl-full z-0" />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-10 relative z-10 animate-fade-in">
          Request a Quote
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-blue-900"
        >
          {[
            { name: "name", label: "Full Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "contactNumber", label: "Contact Number" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors[name]
                    ? "border-red-500"
                    : "border-blue-300 focus:ring-blue-400"
                } focus:outline-none focus:ring-2 transition duration-150`}
                placeholder={label}
              />
              {errors[name] && (
                <p className="text-red-600 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message
                  ? "border-red-500"
                  : "border-blue-300 focus:ring-blue-400"
              } focus:outline-none focus:ring-2 resize-none transition duration-150`}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={status.sending}
              className={`w-full sm:w-auto px-8 py-3 text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-md transition ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Send Request"}
            </button>
          </div>

          {status.success === true && (
            <p className="sm:col-span-2 text-green-600 text-center mt-4">
              ✅ Your quote has been sent!
            </p>
          )}
          {status.success === false && (
            <p className="sm:col-span-2 text-red-600 text-center mt-4">
              ❌ Failed to send. Try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Getquotes;

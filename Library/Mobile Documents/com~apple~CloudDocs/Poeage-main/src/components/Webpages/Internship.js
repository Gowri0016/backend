import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Internmail } from "./Internmail";

const InternshipPage = () => {
  const languages = [
    "MEAN Stack",
    "MERN Stack",
    "Java",
    "Python",
    "MongoDB",
    "Net Works",
    "IOT",
    "UI/UX",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const googleFormBaseURL =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform";
  const googleFormURL = selectedLanguage
    ? `${googleFormBaseURL}?usp=pp_url&entry.123456789=${selectedLanguage}`
    : googleFormBaseURL;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-white py-16 px-4">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 drop-shadow-lg mb-2">
            🎓 Internship Opportunities
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg">
            Select your preferred domain and fill the form to apply!
          </p>
        </section>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] p-6 sm:p-10 border border-white/20 relative z-10">
          {/* Floating effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-gradient-to-tr from-blue-300 to-sky-500 rounded-full blur-3xl opacity-30"></div>

          {/* Internship Selection */}
          <section className="mb-8 relative z-20">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              💼 Choose Your Internship Domain
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLanguage(language)}
                  aria-label={`Select ${language} internship`}
                  className={`py-3 px-4 rounded-xl text-white text-sm sm:text-base font-semibold shadow-md transition-all duration-200 transform ${
                    selectedLanguage === language
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 scale-105 shadow-xl"
                      : "bg-cyan-600 hover:bg-cyan-700 hover:scale-105"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </section>

          {/* Form Section */}
          <section className="relative z-20 mt-10">
            <Internmail selectedDomain={selectedLanguage} />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default InternshipPage;

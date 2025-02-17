"use client"
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FaCode, FaPaintBrush, FaMobileAlt, FaLock } from "react-icons/fa";

const Services = () => {
  return (
    <section className="min-h-screen flex justify-center p-6 bg-gradient-to-br from-[#D8E6EF] to-[#B4D8E4]">
      <div className="w-full max-w-6xl mt-16 relative">
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl font-extrabold text-center text-gray-800 uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-blue-500">SER</span>
          <span className="text-gray-700">VICES</span>
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mt-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          From Raw Data to Real Insights.
        </motion.p>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">
          {/* Left-Side Services */}
          <div className="w-full md:w-1/3 space-y-6">
            <motion.h3 
              className="text-2xl font-bold text-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              BEYOND THE CODE
            </motion.h3>

            {/* Service Cards */}
            {[{
              icon: <FaCode className="text-blue-600 text-3xl" />,
              text: "Clean & Modern Code"
            },{
              icon: <FaPaintBrush className="text-blue-600 text-3xl" />,
              text: "Well-Structured UI"
            },{
              icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
              text: "Responsive & Fast"
            },{
              icon: <FaLock className="text-blue-600 text-3xl" />,
              text: "Secure Systems"
            }].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#89C8DD] p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {service.icon}
                <p className="text-lg font-semibold">{service.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right-Side Service Details */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              title: "Landing Page",
              description: "High-performance, user-friendly landing pages designed for maximum engagement."
            },{
              title: "UI/UX Design",
              description: "Intuitive, modern, and user-centric UI/UX designs for seamless experiences."
            },{
              title: "App Development",
              description: "Cutting-edge mobile app development tailored to your business needs."
            },{
              title: "Web Solutions",
              description: "End-to-end web solutions for fast, secure, and scalable applications."
            }].map((service, index) => (
              <motion.div
                key={index}
                className="bg-blue-500 p-6 rounded-lg shadow-md text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="font-bold text-xl">{service.title}</h4>
                <p className="text-white mt-2 text-lg font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

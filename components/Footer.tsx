"use client"
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="text-gray-800 py-12"
      style={{
        background: "linear-gradient(135.94deg, #D8E6EF 27.28%, #B4D8E4 87.37%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Data Slime</h2>
            <p className="mt-3 text-gray-700 text-sm">
              Transforming raw data into intelligent insights.  
              Secure, fast, and innovative digital solutions.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><a href="/" className="hover:text-gray-900 transition-all duration-200">Home</a></li>
              <li><a href="/services" className="hover:text-gray-900 transition-all duration-200">Services</a></li>
              <li><a href="/aboutUs" className="hover:text-gray-900 transition-all duration-200">About Us</a></li>
              <li><a href="/contactUs" className="hover:text-gray-900 transition-all duration-200">Contact</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="p-3 bg-gray-300 bg-opacity-40 rounded-full hover:bg-opacity-60 transition-all duration-300 text-gray-900"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-gray-700 text-sm border-t border-gray-400 border-opacity-40 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Data Slime. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

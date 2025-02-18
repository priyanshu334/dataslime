"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full p-4 flex items-center justify-between shadow-lg font-bold"
      style={{
        background:
          "radial-gradient(126.07% 208.38% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo1.png" alt="Logo" className="w-20 h-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-900 hover:text-blue-500">Home</a>
        <a href="/services" className="text-gray-900 hover:text-blue-500">Services</a>
        <a href="/projects" className="text-gray-900 hover:text-blue-500">Projects</a>
        <a href="/aboutUs" className="text-gray-900 hover:text-blue-500">About Us</a>
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <a
          href="/contactUs"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-900" onClick={() => setIsOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg flex flex-col items-center p-6 space-y-6 z-50"
        >
          {/* Close Button */}
          <button className="self-end text-gray-900" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          
          {/* Mobile Menu Links */}
          <a href="/" className="text-gray-900 text-lg hover:text-blue-500">Home</a>
          <a href="/services" className="text-gray-900 text-lg hover:text-blue-500">Services</a>
          <a href="/projects" className="text-gray-900 text-lg hover:text-blue-500">Projects</a>
          <a href="/aboutUs" className="text-gray-900 text-lg hover:text-blue-500">About Us</a>
          <a
            href="/contactUs"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

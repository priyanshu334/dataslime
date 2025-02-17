"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        <a href="/" className="text-gray-900 hover:text-blue-500">
          Home
        </a>
        <a href="/services" className="text-gray-900 hover:text-blue-500">
          Services
        </a>
        <a href="/projects" className="text-gray-900 hover:text-blue-500">
          Projects
        </a>
        <a href="/aboutUs" className="text-gray-900 hover:text-blue-500">
          About Us
        </a>
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
      <button
        className="md:hidden text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/" className="text-gray-900 hover:text-blue-500">
            Home
          </a>
          <a href="/services" className="text-gray-900 hover:text-blue-500">
            Services
          </a>
          <a href="/projects" className="text-gray-900 hover:text-blue-500">
            Projects
          </a>
          <a href="/aboutUs" className="text-gray-900 hover:text-blue-500">
            About Us
          </a>
          <a
            href="/contactUs"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

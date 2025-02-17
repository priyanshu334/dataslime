import { Link } from "lucide-react";

const Navbar = () => {
    return (
      <nav
        className="w-full p-4 flex items-center justify-between shadow-lg font-bold "
        style={{
          background:
            "radial-gradient(126.07% 208.38% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="Logo"
            className="w-20 h-15"
          />
        </div>
  
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-900 hover:text-blue-500 ">
            Home
          </a>
          <a href="/services" className="text-gray-900 hover:text-blue-500 ">
            Services
          </a>
          <a href="/projects" className="text-gray-900 hover:text-blue-500 ">
            Projects
          </a>
          <a href="/aboutUs" className="text-gray-900 hover:text-blue-500 ">
            About Us
          </a>
        </div>
  
        {/* Contact Button */}
       
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
         <a href="/contactUs">
         Contact Us
          </a> 
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  
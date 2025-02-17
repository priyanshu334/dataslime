'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, User, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-300 p-6">

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-4">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8 text-lg">Have Questions? We Have Answers!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-200 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-3">Contact Information</h3>
            <p className="text-gray-700 text-lg">Reach out to us using the details below or fill out the form.</p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center text-gray-900 font-semibold text-lg">
                <Phone className="mr-3 text-blue-600" /> +91 9179064396
              </p>
              <p className="flex items-center text-gray-900 font-semibold text-lg">
                <Phone className="mr-3 text-blue-600" /> +91 8827280366
              </p>
              <p className="flex items-center text-gray-900 font-semibold text-lg">
                <Mail className="mr-3 text-blue-600" /> dataslime77@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-3">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
                <User className="text-gray-500 mr-3" />
                <input type="text" name="name" placeholder="Your Name" className="w-full focus:outline-none" onChange={handleChange} required />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
                <Mail className="text-gray-500 mr-3" />
                <input type="email" name="email" placeholder="Email Address" className="w-full focus:outline-none" onChange={handleChange} required />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
                <Phone className="text-gray-500 mr-3" />
                <input type="text" name="phone" placeholder="Phone Number" className="w-full focus:outline-none" onChange={handleChange} />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
                <MessageCircle className="text-gray-500 mr-3" />
                <input type="text" name="subject" placeholder="Subject" className="w-full focus:outline-none" onChange={handleChange} required />
              </div>
              <div className="flex items-start border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
                <MessageCircle className="text-gray-500 mr-3 mt-1" />
                <textarea name="message" placeholder="Message" className="w-full focus:outline-none resize-none" rows={3} onChange={handleChange} required></textarea>
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white flex items-center justify-center py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                <Send className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center py-6 text-gray-900"
        style={{
          background: "linear-gradient(135.94deg, #D8E6EF 27.28%, #B4D8E4 87.37%)",
        }}
      >
        <p className="text-xl font-bold">Data That Flows</p>
        <p className="text-lg text-gray-700">Innovation that Sticks!</p>
      </motion.div>
    </div>
  );
}

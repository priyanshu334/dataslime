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
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setResponseMessage('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setResponseMessage('Error sending email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Failed to send email.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-300 p-6">
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
                <Mail className="mr-3 text-blue-600" /> Support@dataslime.com
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
              <InputField icon={<User />} name="name" placeholder="Your Name" onChange={handleChange} required />
              <InputField icon={<Mail />} name="email" placeholder="Email Address" onChange={handleChange} required />
              <InputField icon={<Phone />} name="phone" placeholder="Phone Number" onChange={handleChange} />
              <InputField icon={<MessageCircle />} name="subject" placeholder="Subject" onChange={handleChange} required />
              <TextAreaField icon={<MessageCircle />} name="message" placeholder="Message" onChange={handleChange} required />

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white flex items-center justify-center py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                {loading ? 'Sending...' : <><Send className="mr-2" /> Send Message</>}
              </motion.button>

              {responseMessage && <p className="text-center text-gray-800 mt-3">{responseMessage}</p>}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Input Field Component
const InputField = ({ icon, name, placeholder, onChange, required }: any) => (
  <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
    {icon} <input type="text" name={name} placeholder={placeholder} className="w-full focus:outline-none ml-3" onChange={onChange} required={required} />
  </div>
);

// TextArea Field Component
const TextAreaField = ({ icon, name, placeholder, onChange, required }: any) => (
  <div className="flex items-start border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
    {icon} <textarea name={name} placeholder={placeholder} className="w-full focus:outline-none resize-none ml-3" rows={3} onChange={onChange} required={required}></textarea>
  </div>
);

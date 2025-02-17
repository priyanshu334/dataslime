'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Em Repairing - Ecommerce Mobile App Solution',
    skills: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/images/p1.png',
    icon: <FaMobileAlt className="text-blue-500 text-3xl mb-2" />,
  },
  {
    title: 'Radha Rani - Web page & Mobile App Solution',
    skills: ['UI/UX Design', 'Web Design', 'App Design', 'Wireframe'],
    image: '/images/p2.png',
    icon: <FaLaptopCode className="text-blue-500 text-3xl mb-2" />,
  },
];

export default function Projects() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-4"
      style={{ background: 'radial-gradient(126.07% 208.38% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)' }}
    >
      <motion.h2 
        className="text-4xl font-bold text-blue-600 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PROJECTS
      </motion.h2>
      <motion.p 
        className="text-gray-600 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Transforming Ideas into Reality.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {project.icon}
            <div className="w-full h- mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={192}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <p className="text-gray-700 text-sm mb-2">{project.skills.join(' • ')}</p>
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transform transition hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact for More Details
      </motion.button>
    </div>
  );
}

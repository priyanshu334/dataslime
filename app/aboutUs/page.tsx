'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaLightbulb } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Paritosh Banchhor',
    role: 'Founder of Data Slim',
    skills: ['Tech Side', 'Coding', 'Marketing'],
    image: '/images/paritosh.jpg',
    icon: <FaCode className="text-blue-500 text-2xl" />,
  },
  {
    name: 'Ritik Gupta',
    role: 'Co-Founder of Data Slim',
    skills: ['UI/UX Design', 'Marketing', 'Wireframe'],
    image: '/images/placeholder-avatar.png',
    icon: <FaPaintBrush className="text-blue-500 text-2xl" />,
  },
  {
    name: 'Priyanshu Shrivastava',
    role: 'Co-Founder of Data Slim',
    skills: ['Tech Side', 'Coding', 'Tech Whisperer'],
    image: '/images/priyanshu.jpg',
    icon: <FaLightbulb className="text-blue-500 text-2xl" />,
  },
];

export default function AboutUs() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-36 px-10"
      style={{
        background: 'radial-gradient(126.07% 208.38% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)',
      }}
    >
      <motion.h2
        className="text-5xl font-bold text-blue-500 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT <span className="text-blue-300">US</span>
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-8 text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Where Three Minds Build the Future
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-blue-200 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-100 h-60 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              {member.icon}
              <p className="text-gray-700 text-sm">{member.skills.join(' • ')}</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="italic text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.p
        className="text-gray-600 mt-8 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Three minds united by a single vision—creating solutions that make a difference
      </motion.p>
    </div>
  );
}

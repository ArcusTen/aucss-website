'use client';
import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    name: "Our Vision",
    desc: "Excellence & leadership in the cyber security education, professions, and research at the local, national, and international levels. A dedication to efficiently addressing society's demands.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Our Mission",
    desc: "To empower the academia as a leading cyber security society and produce world-class cyber security professionals to protect the global cyber-space.",
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  },
  { 
    id: 3, 
    name: "Our Core Values", 
    desc: "Security | Privacy | Fairness | Accountability", 
    icon: (
      <svg className="w-8 h-8 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
];

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white py-24 sm:py-32 font-montserrat relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-dots text-white/5 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full mb-4">Our Philosophy</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-3">
              What We Stand For
            </h2>
            <div className="h-1 w-20 bg-secondary-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:gap-12 rounded-2xl text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="card-glass backdrop-blur-md bg-white/5 border border-white/10 flex flex-col p-8 rounded-xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mx-auto">
                  <div className="p-3 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <dd className="text-2xl font-bold tracking-tight mb-3 group-hover:text-secondary-300 transition-colors duration-300">
                  {stat.name}
                </dd>
                <dt className="text-sm leading-7 text-white/80 p-2">
                  {stat.desc}
                </dt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;

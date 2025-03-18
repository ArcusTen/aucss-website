'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { abdulwali, cg, cyberquest, cyseckarachi, fucsc, isqtc, sheclub, ueit, uet, uetp, csc, ist } from '../assets';

const partners = [
  { name: "ISQTC", logo: isqtc },
  { name: "UET-P Cyber Security Engineers Club", logo: uetp },
  { name: "Cyber Guardians", logo: cg },
  { name: "UET Cyber Security Society", logo: uet },
  { name: "UEIT Cyber Security Club", logo: ueit },
  { name: "CyberSec She Club", logo: sheclub },
  { name: "Cyber Security Karachi", logo: cyseckarachi },
  { name: "Foundation University Cyber Security Club", logo: fucsc },
  { name: "NUTECH Cyber Security Club", logo: csc },
  { name: "Cyber Quest", logo: cyberquest },
  { name: "Abdul Wali Khan University Mardan", logo: abdulwali },
  { name: "Institute of Space Technology", logo: ist },
];

const Cluster = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="bg-white py-24 sm:py-32 font-montserrat relative overflow-hidden" id="cluster">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pattern-grid opacity-5"></div>
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary-100 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Partnerships
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-5xl">
            Our Cybersecurity Cluster
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A nationwide network of clubs and societies collaborating with AUCSS to promote cybersecurity education and awareness.
          </p>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const PartnerCard = ({ partner, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min(index * 0.1, 0.8)
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 w-full h-32 flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={120}
            height={120}
            className="object-contain"
            sizes="(max-width: 120px) 100vw, 120px"
            quality={85}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Cluster;
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
// Import placeholder profiles - these should be replaced with actual profile images
import { aucss } from "../assets"; // Using AUCSS logo as a placeholder
import flash from "../assets/halloffame/flash.jpeg"; // Import flash.jpeg directly
import sham from "../assets/halloffame/sham.jpeg";
import umair from "../assets/halloffame/umair.jpg";
import abd from "../assets/halloffame/abd.jpeg";
import ham from "../assets/halloffame/ham.jpeg";
import khat from "../assets/halloffame/khat.jpeg";
import kum from "../assets/halloffame/kum.jpeg";
// Sample data - replace with actual data when available
const hallOfFame = [
  {
    id: 1,
    name: "Ali Taqi Wajid",
    imageUrl: flash, // Using flash.jpeg
    title: "TheFlash2k",
    achievements: ["BlackHat Finalist 2023 & 2024", "Ignite Winner 2021, 2023 & 2024", "Nascon's Winner 2022, 2023 & 2024", "2nd Place in PuCon 2022 & 2023", "Winner Turkish COMSEC HackMaster"]
  },
  {
    id: 2,
    name: "Shameer Kashif",
    imageUrl: sham, // Replace with actual image import
    title: "Hash3liZer",
    achievements: ["BlackHat Finalist 2023 & 2024", "Ignite Winner 2021, 2023 & 2024", "Nascon's Winner 2022, 2023 & 2024", "Winner Turkish COMSEC HackMaster", "3rd in Ignite Speed Programming 2021", "2nd in Ignite Network attacks and Exploitation 2021"],
  },
  {
    id: 3,
    name: "Umair Sabir",
    imageUrl: umair, // Replace with actual image import
    title: "MikiVirus",
    achievements: ["BlackHat Finalist 2023 & 2024", "Ignite Winner 2023 & 2024", "Nascon's Winner 2023 & 2024", "Winner Turkish COMSEC HackMaster", "Winner PuCon 2023", "Winner MCS'23 CTF"],
  },
  {
    id: 4,
    name: "Abdullah Zameer",
    imageUrl: abd, // Replace with actual image import
    title: "abdullahzamir",
    achievements: ["BlackHat Finalist 2023 & 2024", "Ignite Winner 2023 & 2024", "Nascon's Winner 2023 & 2024", "Winner Turkish COMSEC HackMaster", "Winner PuCon 2023", "Winner NUST'23 CTF"],
  },
  {
    id: 5,
    name: "Hamza Haroon",
    imageUrl: ham, // Replace with actual image import
    title: "Griffyns",
    achievements: ["BlackHat Finalist 2023 & 2024", "3rd Place in Ignite 2023", "2nd Place in PCC 2022 & 2023","Ignite Hackathon Finalist 2024"],
  },
  {
    id: 6,
    name: "Hamza Khattak",
    imageUrl: khat, // Replace with actual image import
    title: "kh4tt4k",
    achievements: ["BlackHat Finalist 2023 & 2024", "3rd Place in Ignite 2023", "2nd Place in PCC 2023","Ignite Hackathon Finalist 2024"],
  },
];

const HallOfFame = () => {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 font-montserrat relative overflow-hidden" id="halloffame">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pattern-grid-lg opacity-5 -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-float -z-10" style={{ animationDelay: '-5s' }}></div>

      {/* Shield icon decoration */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-primary-200 opacity-20 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Honoring Excellence
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-5xl">
            Hall of Fame
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Celebrating the exceptional individuals who have made significant contributions to our cybersecurity community and have demonstrated outstanding achievement.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hallOfFame.map((person, index) => (
            <motion.div
              key={person.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: Math.min(index * 0.1, 0.8)
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="group flex flex-col overflow-hidden rounded-2xl shadow-custom bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    className="aspect-[1/1] w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={person.imageUrl}
                    alt={person.name}
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/75 to-transparent">
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="text-lg font-bold text-white">{person.name}</h3>
                      {person.year && (
                        <span className="text-xs font-semibold bg-secondary-500 text-white px-2 py-1 rounded-full">
                          {person.year}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-100 font-medium">{person.title}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.achievements.map((achievement, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-md"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {person.contributions}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 w-full h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-secondary-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 italic">
            Nominations to our Hall of Fame are made annually based on outstanding contributions to the cybersecurity community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HallOfFame; 
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { au, recypherlogo, erasmus, cys, kashif, khawaja } from '../assets';
import { motion, useAnimation } from 'framer-motion';

const History = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const TimelineItem = ({ year, title, description, index }) => {
    return (
      <motion.div
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
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-blue-400 font-bold mb-2">{year}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 font-montserrat"
      id="history"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pattern-grid opacity-5"></div>
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary-500 to-secondary-400 opacity-30 animate-pulse"
          style={{
            animationDuration: '8s',
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Origin Story
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gradient sm:text-5xl">
            Our History
          </h1>
          <div className="mt-2 w-20 h-1 bg-secondary-500 rounded-full"></div>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            {`AUCSS came into being in February 2020 as Pakistan's first-ever cybersecurity society at the academic level. This great initiative was taken by Dr. Kashif Kifayat, Dean Faculty of Computing & Artificial Intelligence, Air University.`}
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <motion.div 
            className="relative lg:order-last lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative shadow-custom rounded-2xl p-6 bg-white overflow-hidden border-t-4 border-primary-500">
                <div className="px-8 py-10 text-center relative z-10">
                  <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-primary-50 to-transparent opacity-50 rounded-t-2xl"></div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 -z-10 bg-primary-100 rounded-full blur-md transform translate-y-2 scale-95 opacity-40"></div>
                    <Image
                      className="mx-auto h-60 w-60 md:h-60 md:w-60 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                      src={kashif}
                      alt="Dr. Kashif Kifayat"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-primary-800">
                      Dr. Kashif Kifayat
                    </h3>
                    <p className="text-md leading-6 text-primary-600 font-medium">
                      Founder AUCSS & Patron in Chief
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative shadow-custom rounded-2xl p-6 bg-white overflow-hidden border-t-4 border-primary-500">
                <div className="px-8 py-10 text-center relative z-10">
                  <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-primary-50 to-transparent opacity-50 rounded-t-2xl"></div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 -z-10 bg-primary-100 rounded-full blur-md transform translate-y-2 scale-95 opacity-40"></div>
                    <Image
                      className="mx-auto h-60 w-60 md:h-60 md:w-60 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                      src={khawaja}
                      alt="Sir Khawaja Mansoor"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-primary-800">
                      Sir Khawaja Mansoor
                    </h3>
                    <p className="text-md leading-6 text-primary-600 font-medium">
                      Faculty Advisor
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-lg"
              variants={fadeIn}
            >
              Since then, the AUCSS has been working under a diligent leadership
              of professional mentors to achieve its vision to be a cybersecurity leader.
            </motion.p>
            
            <motion.div
              className="mt-10 p-6 bg-white rounded-2xl shadow-custom"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Our Partners</h3>
              <ul role="list" className="flex flex-wrap gap-6 justify-center items-center">
                <motion.li 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={au}
                    alt="Air University"
                    width={140}
                    height={120}
                    priority
                    className="object-contain"
                  />
                </motion.li>
                <motion.li 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={cys}
                    alt="Cybersecurity Department"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </motion.li>
                <motion.li 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={recypherlogo}
                    alt="Recypher"
                    width={140}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </motion.li>
                <motion.li 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={erasmus}
                    alt="Erasmus"
                    width={200}
                    height={35}
                    priority
                    className="object-contain"
                  />
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mt-10 space-y-6 leading-7"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeIn}
                className="p-6 bg-white rounded-2xl shadow-custom text-lg"
              >
                {`Since its formation, AUCSS has proved to be a remarkable achievement at the educational level. It is playing a vital role in bridging the gap between the professional industry and academia by organizing events such as seminars, guest talks, workshops, conferences, and much more.`}
              </motion.p>
              
              <motion.p
                variants={fadeIn}
                className="p-6 bg-white rounded-2xl shadow-custom text-lg"
              >
                {`AUCSS has also partnered with NCCS in an international project, i.e. Erasmus+ Recypher project. The society has been regularly contributing in the organization of cyber security events such as ICHFCS 2022 conference, PCC 2022/2023, and multiple Awareness Trainings on Cyber Security. These events are co-funded by Erasmus+ CBHE programme.`}
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mt-10"
              variants={fadeIn}
            >
              <a href="/#contact" className="btn-outline inline-block">
                Join Our Community
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;

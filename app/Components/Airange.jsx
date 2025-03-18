'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Airange = () => {
  return (
    <section className="relative overflow-hidden font-montserrat py-24 sm:py-32" id="airange">
      {/* Background with gradient & pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      
      {/* Cyber-themed decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="text-xs sm:text-sm opacity-30 font-mono text-green-500 p-2 whitespace-nowrap overflow-hidden">
                01001010 01001111 01001001 01001110 00100000 01000001 01001001 01010010 01000001 01001110 01000111 01000101
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-secondary-300 bg-secondary-900/30 rounded-full mb-4 border border-secondary-700/30">
            CTF Platform
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-200">
            Our Exclusive CTF Platform
          </h1>
          <h2 className="mt-3 text-2xl font-bold text-secondary-400">AIRange</h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-custom border border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500"></div>
            <p className="text-xl leading-8 text-gray-300">
              Enter the weekly Cybersecurity Challenge, an esteemed Jeopardy-style Capture The Flag (CTF) platform proudly presented by the Air University Cyber Security Society, under the leadership of Head, Hamza Haroon. Engage in a dynamic environment where fresh challenges are unveiled each week. Join us to cultivate your cybersecurity acumen, interact with fellow enthusiasts, and vie for top honors on the leaderboard.
            </p>
            
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <motion.div 
                className="bg-gray-800/80 p-6 rounded-xl border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Weekly Challenges</h3>
                <p className="text-gray-400">
                  New cybersecurity challenges released every week across various categories.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/80 p-6 rounded-xl border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Skill Development</h3>
                <p className="text-gray-400">
                  Hone your cybersecurity skills through practical, hands-on challenges.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/80 p-6 rounded-xl border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community Leaderboard</h3>
                <p className="text-gray-400">
                  Compete with peers and track your progress on our dynamic leaderboard.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a 
                href="https://airange.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Visit AIRange
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Airange;

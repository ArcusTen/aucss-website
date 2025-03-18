'use client';
import React from "react";
import Image from "next/image";
import { about } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full bg-white py-20 px-4 relative overflow-hidden font-montserrat"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute top-0 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full">Discover</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient">About Us</h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-lg opacity-20 animate-pulse-slow"></div>
            <div className="relative">
              <Image
                className="w-full h-auto rounded-2xl shadow-custom object-cover hover-lift"
                src={about}
                alt="AUCSS Team"
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card p-8 hover-lift">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                Air University Cyber Security Society is a subordinate body working in collaboration with the Air University and the Department of Cyber Security.
              </p>
            </div>

            <div className="card p-8 hover-lift">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Our Structure</h3>
              <p className="text-gray-600 leading-relaxed">
                AUCSS is headed by the President, co-headed by the Vice President and managed by the General Secretary. The society comprises of four teams: Technical, Management, Media, and Security.
              </p>
            </div>

            <div className="card p-8 hover-lift">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Our Clubs</h3>
              <p className="text-gray-600 leading-relaxed">
                Alongside this, AUCSS has eight clubs, each having its own objectives. Each team and club is headed by a Team Head and a Co-Head, appointed by the President and the core committee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

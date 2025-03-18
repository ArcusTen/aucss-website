'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { hero } from "../assets";
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Particle effect with connections
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        setDimensions({
          width: canvasRef.current.parentElement.offsetWidth,
          height: canvasRef.current.parentElement.offsetHeight
        });
      }
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Particle properties
    const particleCount = Math.min(Math.floor(dimensions.width * 0.05), 100);
    const particles = [];
    const connectionDistance = 150;
    const colors = ['#3b82f6', '#10b981', '#6366f1'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.2;
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.05 * (1 - distance / connectionDistance);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [dimensions]);
  
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

// Animated cyber shield icon
const CyberShieldIcon = ({ className }) => (
  <motion.svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.path 
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
    />
    <motion.path 
      d="M12 22V2" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    />
    <motion.path 
      d="M12 12L20 5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    />
    <motion.path 
      d="M12 12L4 5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3" 
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    />
  </motion.svg>
);

// Animated binary code backdrop
const BinaryCodeBackdrop = () => {
  // Create a stable array of animation durations and delays
  const animationDurations = [42, 45, 38, 50, 55, 44, 48, 40, 52, 46, 43, 51, 39, 47, 53, 41, 49, 54, 37, 36, 58, 35, 59, 60, 56, 34, 57, 61, 62, 33, 63, 32, 64, 31, 65, 30, 66, 29, 67, 28, 68, 27, 69, 26, 70, 25, 71, 24, 72, 73];
  const animationDelays = [2, 5, 0, 4, 8, 1, 7, 3, 9, 6, 2.5, 7.5, 3.5, 1.5, 6.5, 8.5, 4.5, 0.5, 5.5, 9.5, 2.2, 7.2, 3.2, 9.2, 5.2, 0.2, 6.2, 8.2, 4.2, 1.2, 3.8, 7.8, 0.8, 5.8, 9.8, 2.8, 4.8, 6.8, 1.8, 8.8, 3.3, 6.3, 9.3, 0.3, 5.3, 8.3, 2.3, 4.3, 7.3, 1.3];
  
  // Predefined binary patterns
  const binaryPatterns = [
    "1 0 1 0 1 1 0 0 1 1 0 1 0 1 0 0 1 1 0 1 0 1 1 1 0 0 1 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 1 0 1 0 1 0 1",
    "0 1 0 1 0 0 1 1 0 0 1 0 1 0 1 1 0 0 1 0 1 0 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 0 1 1 0 1 0 0 1 0 1 0 1 0 1 0",
    "1 1 0 0 1 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 1 0 1 0 0 1 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 1 0 0 1 1",
    "0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 0 1 0 1 1 0 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 0 1 1 0 0",
    "1 0 0 1 1 0 1 0 0 1 0 1 0 0 1 1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 1 0 1 0 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1"
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 opacity-10">
      <div className="absolute -top-10 -left-10 right-0 bottom-0 text-[8px] text-primary-500 whitespace-nowrap font-mono leading-tight opacity-20">
        {Array.from({ length: 50 }).map((_, i) => {
          const patternIndex = i % binaryPatterns.length;
          const durationIndex = i % animationDurations.length;
          const delayIndex = i % animationDelays.length;
          
          return (
            <div 
              key={i} 
              className="opacity-80"
              style={{ 
                animation: `scrollDown ${animationDurations[durationIndex]}s linear infinite`,
                animationDelay: `${animationDelays[delayIndex]}s` 
              }}
            >
              {binaryPatterns[patternIndex]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Animated counter
const AnimatedCounter = ({ targetValue, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * targetValue));
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, duration, isVisible]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={counterRef} className="bg-white backdrop-blur-sm bg-opacity-70 shadow-sm rounded-lg px-4 py-3 border border-gray-100">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold text-primary-700">{count}+</p>
    </div>
  );
};

// Hero component
const Hero = () => {
  const controls = useAnimation();
  const [animateHero, setAnimateHero] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);
  
  const features = [
    "Cybersecurity education & awareness",
    "Hands-on technical workshops",
    "Capture The Flag competitions",
    "Professional networking opportunities"
  ];
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    });
    
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 500);
    
    const featureInterval = setInterval(() => {
      setCurrentFeatureIndex(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
    };
  }, [controls, features.length]);
  
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  const typingText = "Empowering students to secure the digital frontier.";

  return (
    <div className="bg-white font-montserrat overflow-hidden">
      <div className="relative isolate min-h-screen flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-primary-50"></div>
        <ParticleNetwork />
        <BinaryCodeBackdrop />
        
        {/* Animated background blobs */}
        <motion.div 
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -20, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/4 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            x: [0, 40, 0], 
            y: [0, 20, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>

        {/* Hex Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-[url('/hex-pattern.svg')] bg-repeat"></div>
        </div>

        {/* Main Content */}
        <motion.div 
          className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-16 relative z-10"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
          >
            {/* Top badges and shield icon */}
            <motion.div
              className="flex items-center space-x-2 mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className="text-primary-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <CyberShieldIcon className="h-6 w-6 inline-block mr-2 text-primary-500" />
                Defend • Learn • Innovate
              </motion.span>
            </motion.div>
            
            {/* Badge row */}
            <motion.div
              className="flex flex-wrap items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-primary-500 rounded-full bg-primary-50 ring-1 ring-inset ring-primary-500/20 shadow-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="mr-2 h-1.5 w-1.5 fill-primary-500 animate-pulse-slow" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
          </svg>
                2025-2026 Session
              </motion.span>
            </motion.div>

            {/* Heading - Improved appearance of society name */}
            <motion.h1 
              className="mt-6 max-w-lg text-5xl font-bold tracking-tight sm:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400"
                >
                  Air University
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                ></motion.span>
              </motion.div>
              <br />
              <motion.div 
                className="flex flex-wrap text-gray-900 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span 
                  className="text-gradient-enhance mr-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Cyber
                </motion.span>
                <motion.span 
                  className="text-gradient-enhance mr-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Security
                </motion.span>
                <motion.span 
                  className="text-gradient-enhance"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Society
                </motion.span>
              </motion.div>
            </motion.h1>

            {/* Animated typing text */}
            <motion.div 
              className="mt-8 h-8 overflow-hidden"
              initial="hidden"
              animate={animateHero ? "visible" : "hidden"}
              variants={typingVariants}
            >
              <div className="flex flex-wrap text-lg leading-8 text-gray-600">
                {typingText.split("").map((letter, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    className={`${letter === " " ? "mr-1.5" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span 
                  className="inline-block w-1 h-6 bg-primary-500 ml-1 self-center"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.span>
              </div>
            </motion.div>

            {/* Animated features showcase */}
            <motion.div 
              className="mt-4 h-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="text-md text-gray-500 flex items-center">
                <svg className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFeatureIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {features[currentFeatureIndex]}
                  </motion.span>
                </AnimatePresence>
          </div>
            </motion.div>

            {/* Stats section removed */}

            {/* CTA Buttons */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.a 
                href="/#about" 
                className="btn-primary group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore AUCSS</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a 
                href="/#contact" 
                className="btn-primary group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Join Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative z-10"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Interactive glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              
              {/* Decorative cyber elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-primary-300 opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-secondary-300 opacity-60"></div>
              
              {/* 3D card effect */}
              <motion.div 
                className="relative bg-white p-2 rounded-xl shadow-2xl overflow-hidden perspective-800"
                whileHover={{ y: -8, rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/50 to-transparent"></div>
                
                {/* Lock icon overlay in corner */}
                <div className="absolute top-3 right-3 bg-primary-500/80 text-white rounded-full p-2 z-20 shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                {/* Main image */}
                <Image 
                  src={hero} 
                  alt="AUCSS Hero Image" 
                  priority 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-3 -right-3 bg-white shadow-lg rounded-full px-3 py-1 text-xs font-medium text-primary-700 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ y: -3 }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Active Community
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 bg-white shadow-lg rounded-full px-3 py-1 text-xs font-medium text-secondary-700 flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ y: 3 }}
              >
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-1"></span>
                Technical Excellence
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <motion.div 
            className="w-1 h-8 rounded-full bg-gray-300 overflow-hidden"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-full h-4 bg-primary-500 rounded-full"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add this CSS to the component for the enhanced text gradient */}
      <style jsx global>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #3b82f6, #64748b);
        }
        
        .text-gradient-enhance {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(135deg, #1e40af, #3b82f6, #38bdf8);
          font-weight: 800;
          text-shadow: 0px 2px 4px rgba(59, 130, 246, 0.1);
          position: relative;
        }
        
        @keyframes scrollDown {
          from { transform: translateY(0); }
          to { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;



   
          
'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { chescrypt, connectTech, cyberFundamentals, cybersiege, cybersiegeWorkshop, cyberstorm, digitalArt, etizazTalk, farewell, futsal, fypseminar, hackathon, humanFactors, iccws, recypher, webSecurity, introductory, cyberstorm2, cispa, welcome, bugBountyTalk, projectManagementCourse, cybHer, osint101, blueHorizon, crackingCode, airtechCtf2025, awarenessWorkshopMisinformation, ctfWorkshopHitec, ctiWorkshopDrZafar, drZuneraSeminar, farewellF21Batch, introAgenticAI, researchIdeathon, socStarterWorkshop, workshopHasanMazhar} from '../assets';

const events = [
  {
    id: 36,
    title: "Workshop by Hasan Mazhar",
    imageUrl: workshopHasanMazhar,
    date: "March 25, 2025",
    datetime: "2025-03-25",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
    description: "Expert workshop on cybersecurity fundamentals and practical applications by industry professional Hasan Mazhar."
  },
  {
    id: 35,
    title: "SOC Starter Workshop",
    imageUrl: socStarterWorkshop,
    date: "May 20, 2025",
    datetime: "2025-05-20",
    Organizer: {
      name: "AUCSS - Tooba Saleem",
    },
    description: "Introduction to Security Operations Center (SOC) fundamentals and career pathways in cybersecurity operations."
  },
  {
    id: 34,
    title: "Research Ideathon",
    imageUrl: researchIdeathon,
    date: "May 19, 2025",
    datetime: "2025-05-19",
    Organizer: {
      name: "AUCSS Research Club",
    },
    description: "Innovative research competition focused on emerging cybersecurity challenges and solutions."
  },
  {
    id: 33,
    title: "Intro to Agentic AI in Cybersecurity",
    imageUrl: introAgenticAI,
    date: "May 11, 2025",
    datetime: "2025-05-11",
    Organizer: {
      name: "AUCSS - Hamza Haroon",
    },
    description: "Exploring the intersection of artificial intelligence and cybersecurity with focus on autonomous security systems."
  },
  {
    id: 32,
    title: "Farewell of F21 Batch",
    imageUrl: farewellF21Batch,
    date: "June 01, 2025",
    datetime: "2025-06-01",
    Organizer: {
      name: "AUCSS",
    },
    description: "Farewell ceremony celebrating the achievements and contributions of the F21 graduating batch."
  },
  {
    id: 31,
    title: "CTI Workshop by Dr. Zafar Iqbal",
    imageUrl: ctiWorkshopDrZafar,
    date: "June 03, 2025",
    datetime: "2025-06-03",
    Organizer: {
      name: "AUCSS & AU Women in Cyber Club",
    },
    description: "Cyber Threat Intelligence workshop focusing on threat analysis and intelligence gathering techniques."
  },
  {
    id: 30,
    title: "Dr. Zunera Research Seminar",
    imageUrl: drZuneraSeminar,
    date: "April 29, 2025",
    datetime: "2025-04-29",
    Organizer: {
      name: "AUCSS Research Club",
    },
    description: "Research methodology seminar by Dr. Zunera focusing on academic research best practices and publication strategies."
  },
  {
    id: 29,
    title: "CTF Workshop at HITEC Taxila",
    imageUrl: ctfWorkshopHitec,
    date: "March 19, 2025",
    datetime: "2025-03-19",
    Organizer: {
      name: "AUCSS",
    },
    description: "Capture The Flag workshop conducted at HITEC University Taxila, focusing on practical cybersecurity challenges."
  },
  {
    id: 28,
    title: "Awareness Workshop - Navigating Misinformation",
    imageUrl: awarenessWorkshopMisinformation,
    date: "May 05, 2025",
    datetime: "2025-05-05",
    Organizer: {
      name: "AUCSS Awareness Team",
    },
    description: "Educational workshop on identifying and combating misinformation in the digital age."
  },
  {
    id: 27,
    title: "AirTech CTF 2025",
    imageUrl: airtechCtf2025,
    date: "May 02, 2025",
    datetime: "2025-05-02",
    Organizer: {
      name: "AUCSS",
    },
    description: "Advanced Capture The Flag competition featuring cutting-edge cybersecurity challenges and real-world scenarios."
  },
  {
    id: 26,
    title: "Blue Horizon",
    imageUrl: blueHorizon,
    date: "March 07, 2024",
    datetime: "2024-03-07",
    Organizer: {
      name: "AUCSS",
    },
    description: "An immersive cybersecurity experience focusing on defensive strategies and blue team operations."
  },
  {
    id: 25,
    title: "OSINT-101 Workshop",
    imageUrl: osint101,
    date: "March 07, 2024",
    datetime: "2024-03-07",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
    description: "Introduction to Open Source Intelligence gathering and analysis techniques."
  },
  {
    id: 24,
    title: "CybHer Sec",
    imageUrl: cybHer,
    date: "March 06, 2024",
    datetime: "2024-03-06",
    Organizer: {
      name: "AUCSS & AU Women Cyber Club",
    },
    description: "Empowering women in cybersecurity through specialized training and networking."
  },
  {
    id: 23,
    title: "Cracking the Code",
    imageUrl: crackingCode,
    date: "March 04, 2024",
    datetime: "2024-03-04",
    Organizer: {
      name: "AUCSS",
    },
    description: "Cryptography challenge for students to test their problem-solving skills."
  },
  {
    id: 22,
    title: "Project Management Course",
    imageUrl: projectManagementCourse,
    date: "Feb 28, 2024",
    datetime: "2024-02-28",
    Organizer: {
      name: "AUCSS, ReCYPHER & Erasmas+",
    },
    description: "Comprehensive course on managing cybersecurity projects effectively."
  },
  {
    id: 21,
    title: "The Art of Bug Bounty",
    imageUrl: bugBountyTalk,
    date: "Feb 27, 2024",
    datetime: "2024-02-27",
    Organizer: {
      name: "AUCSS",
    },
    description: "Expert-led session on finding and reporting security vulnerabilities."
  },
  {
    id: 20,
    title: "Cyberstorm 2.0",
    imageUrl: cyberstorm2,
    date: "Dec 06, 2023",
    datetime: "2023-12-06",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
    description: "Advanced CTF competition with challenging security scenarios."
  },
  {
    id: 19,
    title: "Batch 2023 Welcome Party",
    imageUrl: welcome,
    date: "Nov 26, 2023",
    datetime: "2023-11-26",
    Organizer: {
      name: "AUCSS",
    },
    description: "Social event welcoming new cybersecurity students to the community."
  },
  {
    id: 18,
    title: "CISPA Cyber Security Talks",
    imageUrl: cispa,
    date: "Oct 09, 2023",
    datetime: "2023-10-09",
    Organizer: {
      name: "AUCSS & CISPA",
    },
    description: "Industry experts sharing insights on emerging cybersecurity threats."
  },
  {
    id: 17,
    title: "Cybersecurity 101 Introductory Session",
    imageUrl: introductory,
    date: "Sep 25, 2023",
    datetime: "2023-09-25",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
    description: "Foundational course covering cybersecurity basics for beginners."
  },
  {
    id: 16,
    title: "Ethical Hacking VOIP & Wireless Hacking Workshop",
    imageUrl: recypher,
    date: "September 15, 2023",
    datetime: "2023-09-13",
    Organizer: {
      name: "AUCSS & ReCYPHER & ERASMUS+",
    },
    description: "Hands-on training for secure VOIP implementation and wireless network testing."
  },
  {
    id: 15,
    title: "Batch 2018 Farewell Party",
    imageUrl: farewell,
    date: "May 27, 2023",
    datetime: "2023-05-27",
    Organizer: {
      name: "AUCSS",
    },
    description: "Celebration for graduating cybersecurity professionals entering the industry."
  },
  {
    id: 14,
    title: "Etizaz Mohsin Tech Talk",
    imageUrl: etizazTalk,
    date: "May 8, 2023",
    datetime: "2023-05-08",
    Organizer: {
      name: "AUCSS",
    },
    description: "Industry expert sharing career insights and technical knowledge."
  },
  {
    id: 13,
    title: "Web Security Training",
    imageUrl: webSecurity,
    date: "May 5, 2023",
    datetime: "2023-05-05",
    Organizer: {
      name: "AU cyber skills club",
    },
    description: "Comprehensive training on protecting web applications from attacks."
  },
  {
    id: 12,
    title: "Digital Art Competition",
    imageUrl: digitalArt,
    date: "Mar 21, 2023",
    datetime: "2023-03-21",
    Organizer: {
      name: "AUCSS",
    },
    description: "Creative competition combining cybersecurity themes with digital artistry."
  },
  {
    id: 11,
    title: "Futsal Matches",
    imageUrl: futsal,
    date: "Mar 20, 2023",
    datetime: "2023-03-20",
    Organizer: {
      name: "AUCSS",
    },
    description: "Social sports event to build community among cybersecurity enthusiasts."
  },
  {
    id: 10,
    title: "CyberStorm",
    imageUrl: cyberstorm,
    date: "Mar 17, 2023",
    datetime: "2023-03-17",
    Organizer: {
      name: "AU cyber skills club",
    },
    description: "Capture-the-flag competition testing offensive and defensive security skills."
  },
  {
    id: 9,
    title: "Cyber Fundamentals",
    imageUrl: cyberFundamentals,
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    Organizer: {
      name: "AUCSS",
    },
    description: "Workshop covering essential cybersecurity concepts for all skill levels."
  },
  {
    id: 8,
    title: "Connect Tech",
    imageUrl: connectTech,
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    Organizer: {
      name: "AUCSS & YPDC",
    },
    description: "Networking event connecting students with industry professionals."
  },
  {
    id: 7,
    title: "Chescrypt",
    imageUrl: chescrypt,
    date: "Mar 03, 2023",
    datetime: "2023-03-03",
    Organizer: {
      name: "AUCSS",
    },
    description: "Strategic cryptography challenge modeled after chess gameplay."
  },
  {
    id: 6,
    title: "CyberSiege",
    imageUrl: cybersiege,
    date: "Feb 25, 2023",
    datetime: "2023-02-25",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
    description: "Intensive security competition with advanced attack and defense scenarios."
  },
  {
    id: 5,
    title: "CyberSiege Workshop",
    imageUrl: cybersiegeWorkshop,
    date: "Feb 24, 2023",
    datetime: "2023-02-24",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
    description: "Preparatory training for the CyberSiege competition with hands-on exercises."
  },
  {
    id: 4,
    title: "FYP Seminar",
    imageUrl: fypseminar,
    date: "Feb 8, 2023",
    datetime: "2023-02-08",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
    description: "Guidance session for final year projects focused on cybersecurity innovations."
  },
  {
    id: 3,
    title: "International Conference on Cyber Warfare and Security (ICCWS) 2022",
    imageUrl: iccws,
    date: "Dec 7, 2022",
    datetime: "2022-12-07",
    Organizer: {
      name: "NCCS",
    },
    description: "Global academic conference on cyber warfare trends and defensive strategies."
  },
  {
    id: 2,
    title: "Hackathon Training",
    imageUrl: hackathon,
    date: "Oct 1, 2022",
    datetime: "2022-03-17",
    Organizer: {
      name: "AUCSS",
    },
    description: "Intensive coding and security challenge preparation workshop."
  },
  {
    id: 1,
    title: "International Conference on Human Factors in Cybersecurity (HFCS) 2022",
    imageUrl: humanFactors,
    date: "Sep 30, 2022",
    datetime: "2022-09-30",
    Organizer: {
      name: "NCCS & ReCYPHER",
    },
    description: "Research conference exploring the human aspects of cybersecurity challenges."
  },
];

const Events = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [imageDimensions, setImageDimensions] = useState({});

  // Handle image load to get dimensions
  const handleImageLoad = (eventId, img) => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const baseHeight = 400; // Base height for consistency
    const calculatedWidth = Math.max(300, Math.min(500, baseHeight * aspectRatio));
    
    setImageDimensions(prev => ({
      ...prev,
      [eventId]: {
        width: calculatedWidth,
        height: baseHeight,
        aspectRatio
      }
    }));
  };

  // Auto-scroll functionality with increased speed
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scrollSpeed = 3; // Increased scroll speed
    const scrollStep = () => {
      if (!isHovered && scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          setScrollDirection(-1);
        } else if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1);
        }
        
        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
      }
    };

    const interval = setInterval(scrollStep, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isHovered, scrollDirection]);

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
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 sm:py-32 font-montserrat relative overflow-hidden" id='events'>
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pattern-grid opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-5 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary-500 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full mb-4 shadow-inner-glow">
            Our Activities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-5xl">
            Events & Workshops
          </h2>
          <div className="mt-2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-glow"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the various events organized and managed by AUCSS, including training sessions, workshops, competitions, and social gatherings.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-primary-300 hover:scrollbar-thumb-primary-500 pb-6 scroll-smooth"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollbarWidth: 'thin' }}
          >
            <motion.div 
              className="flex space-x-6 w-max"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {events.map((event, index) => {
                const dimensions = imageDimensions[event.id] || { width: 350, height: 400 };
                
                return (
                  <motion.article
                    key={event.id}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 shadow-custom hover:shadow-custom-lg transition-all duration-300 flex-shrink-0"
                    style={{ 
                      width: `${dimensions.width}px`, 
                      height: `${dimensions.height + 120}px` // Extra space for content
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Optimized Image Container for all aspect ratios */}
                    <div 
                      className="absolute top-0 left-0 right-0 -z-10 overflow-hidden rounded-t-2xl"
                      style={{ height: `${dimensions.height}px` }}
                    >
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full transition-all duration-300 group-hover:scale-[1.02]"
                        fill
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        sizes={`${dimensions.width}px`}
                        quality={90}
                        priority={index < 6}
                        onLoad={(e) => handleImageLoad(event.id, e.target)}
                      />
                    </div>
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 -z-5 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20 group-hover:from-gray-900 group-hover:via-gray-900/70 transition-all duration-300" />
                    <div className="absolute inset-0 -z-5 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 -z-5 rounded-2xl ring-1 ring-inset ring-gray-900/20 group-hover:ring-primary-500/30 transition-all duration-300" />

                    {/* Dark gradient overlay for content area */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent -z-4"></div>

                    {/* Content Container */}
                    <div className="relative p-6 space-y-3 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent">
                      <div className="flex flex-wrap items-center gap-2 text-sm leading-6">
                        <time 
                          dateTime={event.datetime} 
                          className="bg-gradient-to-r from-primary-500 to-primary-600 px-3 py-1 rounded-lg text-white shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        >
                          {event.date}
                        </time>
                        <div className="flex items-center gap-x-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-700/50">
                          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-secondary-400">
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          <div className="text-xs text-gray-300">
                            {event.Organizer.name}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-gradient transition-all duration-300 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      {/* Description - Always visible */}
                      <div className="text-sm text-gray-300 leading-relaxed line-clamp-3 opacity-90 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-300">
                        {event.description}
                      </div>

                      {/* Hover indicator */}
                      <div className="flex items-center text-secondary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <span className="text-xs font-medium">Learn more</span>
                        <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          {/* Gradient fade effects on sides */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
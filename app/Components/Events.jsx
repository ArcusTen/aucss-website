'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { chescrypt, connectTech, cyberFundamentals, cybersiege, cybersiegeWorkshop, cyberstorm, digitalArt, etizazTalk, farewell, futsal, fypseminar, hackathon, humanFactors, iccws, recypher, webSecurity, introductory, cyberstorm2, cispa, welcome, bugBountyTalk, projectManagementCourse, cybHer, osint101, blueHorizon, crackingCode} from '../assets';

const events = [
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
    <section className="bg-white py-24 sm:py-32 font-montserrat relative overflow-hidden" id='events'>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pattern-grid opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Our Activities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-5xl">
            Events & Workshops
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the various events organized and managed by AUCSS, including training sessions, workshops, competitions, and social gatherings.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 shadow-custom"
            >
              <Image
                src={event.imageUrl}
                alt={event.title}
                className="absolute inset-0 -z-10 object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                priority={index < 3}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 group-hover:via-gray-900/70 transition-colors duration-300" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={event.datetime} className="mr-8 bg-primary-500/60 px-2 py-1 rounded-md text-white">
                  {event.date}
                </time>
                <div className="flex items-center gap-x-2 bg-gray-800/60 px-2 py-1 rounded-md">
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-xs sm:text-sm">
                    {event.Organizer.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-secondary-300 transition-colors duration-300">
                {event.title}
              </h3>
              
              <div className="mt-3 text-sm text-gray-300 opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {event.description}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
'use client';
import React from 'react'
import Image from 'next/image'
import { management, blueteam, security, redteam, technical, awareness, graphics, ctfteam} from '../assets';
import { motion } from 'framer-motion';
import skills from "../assets/teams/skills.jpg";
import research from "../assets/teams/research.jpg";
const teams = [
  {
    name: "Technical Team",
    imageUrl: technical,
    description: "Responsible for all technical operations, workshops, and CTF development.",
  },
  {
    name: "Women In Cyber & Awareness",
    imageUrl: awareness,
    description: "Promoting gender diversity and creating cybersecurity awareness.",
  },
  {
    name: "Management & Operations Team",
    imageUrl: management,
    description: "Handling logistics, event management, and society operations.",
  },
  {
    name: "Graphics & Media Team",
    imageUrl: graphics,
    description: "Creating visual content and managing social media presence.",
  },
  {
    name: "Security & Protocol Team",
    imageUrl: security,
    description: "Ensuring security protocols and best practices are followed.",
  },
  {
    name: "Red Team",
    imageUrl: redteam,
    description: "Offensive security operations and penetration testing.",
  },
  {
    name: "CTF Team",
    imageUrl: ctfteam,
    description: "Participating in Capture The Flag competitions representing AUCSS.",
  },
  {
    name: "Blue Team",
    imageUrl: blueteam,
    description: "Defensive security operations and incident response.",
  },
  {
    name: "Cyber Skills Team",
    imageUrl: skills,
    description: "Skills Development and Competitions",
  },
  {
    name: "Research Team",
    imageUrl: research,
    description: "Research and Development",
  },
];

const Teams = () => {
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
    <section className="bg-white py-24 sm:py-32 font-montserrat relative overflow-hidden" id="teams">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pattern-grid opacity-5"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Our Structure
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-5xl">
            Our Teams
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AUCSS consists of multiple specialized teams, each led by a team lead and co-lead, with various 
            clubs operating under them to ensure comprehensive coverage of cybersecurity domains.
          </p>
        </motion.div>

        <motion.ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teams.map((team, index) => (
            <motion.li 
              key={team.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-custom">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  className="aspect-[1/1] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  src={team.imageUrl}
                  alt={team.name}
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-light">{team.description}</p>
                </div>
              </div>
              <div className="relative z-20 mt-4 bg-white/80 backdrop-blur-sm rounded-xl mx-2 -translate-y-8 p-4 shadow-custom">
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-primary-600">
                  {team.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{team.role}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/#contact" className="btn-outline inline-block">
            Join Our Teams
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Teams
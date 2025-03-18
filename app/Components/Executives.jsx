'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { kumail, abdullahharoon, zainabsaif, sundas, qalb, anas, shahal, husnain, faizan, abdullah, abdullahtufail, rafay} from '../assets';

const Executives = () => {
    const people = [
      {
        name: "Husnain Tahir",
        role: "President",
        imageUrl: husnain,
        linkedinUrl: "https://www.linkedin.com/in/husnain-tahir-551921225/",
      },
      {
        name: "Rafay Malik",
        role: "Vice President",
        imageUrl: rafay,
        linkedinUrl: "https://www.linkedin.com/in/muhammad-rafay-malik-a38181273/",
      },
      {
        name: "Muhammad Abdullah",
        role: "Technical Secretary",
        imageUrl: abdullah,
        linkedinUrl: "https://www.linkedin.com/in/muhammad-abdullah-691a1026a/",
      },
      {
        name: "Faizan Arshad",
        role: "General Secretary 1",
        imageUrl: faizan,
        linkedinUrl: "https://www.linkedin.com/in/faizanars/",
      },
      {
        name: "Zainab Saif",
        role: "General Secretary 2",
        imageUrl: zainabsaif,
        linkedinUrl: "#",
      },
      {
        name: "Kumail Zaidi",
         role: "Joint Secretary Technical",
         imageUrl: kumail,
         linkedinUrl: "https://www.linkedin.com/in/kumailzaidi23/",
       },
      {
        name: "Abdullah Tufail",
        role: "Ambassador",
        imageUrl: abdullahtufail,
        linkedinUrl: "https://www.linkedin.com/in/abdula2fal/",
      },
      {
        name: "Abdullah Haroon",
        role: "Joint Secretary Media & Graphics",
        imageUrl: abdullahharoon,
        linkedinUrl: "#",
      },
      {
        name: "Sundas Rashid",
        role: "Joint Secretary Awareness & Women In Cyber",
        imageUrl: sundas,
        linkedinUrl: "#",
      },
      {
        name: "Shahal Farid",
        role: "Joint Secretary Sports & Adventure",
        imageUrl: shahal,
        linkedinUrl: "#",
      },
      {
        name: "Anas Zeeshan",
         role: "Joint Secretary Security & Protocol",
         imageUrl: anas,
         linkedinUrl: "https://www.linkedin.com/in/anas-zeeshan-4aba75152/",
       },
      {
        name: "Qalbe Abbas",
        role: "Joint Secretary Management & Operations",
        imageUrl: qalb,
        linkedinUrl: "#",
      },
    ];

  return (
    <section className="relative overflow-hidden font-montserrat py-24 sm:py-32" id="executives">
      {/* Background with gradient & pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-primary-900 -z-10"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-300 bg-primary-900/50 rounded-full mb-4 border border-primary-700/30">
            Leadership
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
            Meet Our Executive Team
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            AUCSS is headed by our President and supported by a dedicated team of executives who drive 
            our mission forward through specialized roles and responsibilities.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {people.map((person, index) => (
            <motion.div
              key={person.name}
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
              <div className="relative mx-auto rounded-2xl p-[2px] bg-gradient-to-br from-primary-400 to-secondary-500 shadow-xl group">
                <div className="bg-gray-800 p-6 rounded-2xl relative flex flex-col h-full">
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 absolute inset-0 blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="relative border-2 border-primary-400 rounded-full p-1 overflow-hidden">
                      <Image
                        className="w-32 h-32 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={person.imageUrl}
                        alt={person.name}
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <h3 className="text-lg font-bold leading-7 tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium leading-6 text-primary-300 mt-1">
                      {person.role}
                    </p>
                    <p className="mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {person.bio}
                    </p>
                    <motion.div 
                      className="mt-4 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(index * 0.1, 0.8) + 0.3, duration: 0.3 }}
                    >
                      <a
                        href={person.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-300 transition-all duration-300 p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our executive team works collaboratively to provide leadership across all aspects of cybersecurity education, 
            awareness, and skill development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Executives;
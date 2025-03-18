'use client';
import React, { useState } from 'react';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { contactlogo } from '../assets';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    
    try {
      const response = await fetch('https://getform.io/f/b5b47b5f-72b6-4d9e-96d3-f6288f849735', {
        method: 'POST',
        body: new FormData(e.target),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative isolate bg-white font-montserrat overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute -top-52 -left-52 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-72 h-72 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '-5s' }}></div>
      <div 
        className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-secondary-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto max-w-2xl px-6 py-10"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full mb-4">
            Get in touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-5xl">
            Contact Us
          </h2>
          <div className="mt-2 w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join hands to build a Cyber Secure Pakistan. We'd love to hear from you!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-10 relative z-10">
          <motion.div 
            className="bg-white shadow-custom rounded-2xl p-8 overflow-hidden relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-xl">
              <h3 className="text-2xl font-semibold text-primary-600 mb-6">
                Our Information
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels. We're always eager to connect with cybersecurity enthusiasts, professionals, and organizations.
              </p>
              <dl className="space-y-6 text-base leading-7 text-gray-600">
                <motion.div 
                  className="flex gap-x-4 items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-primary-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="font-medium">Air University, E-9/4, Islamabad</dd>
                </motion.div>
                <motion.div 
                  className="flex gap-x-4 items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-primary-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="font-medium hover:text-primary-600 transition-colors"
                      href="tel:+92 315 5762895"
                    >
                      +92 315 5762895
                    </a>
                  </dd>
                </motion.div>
                <motion.div 
                  className="flex gap-x-4 items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-primary-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="font-medium hover:text-primary-600 transition-colors"
                      href="mailto:aucssofficial@gmail.com"
                    >
                      aucssofficial@gmail.com
                    </a>
                  </dd>
                </motion.div>
              </dl>
              <div className="mt-10 flex justify-center">
                <Image 
                  src={contactlogo} 
                  alt={"AUCSS logo"} 
                  className="h-40 w-auto"
                  style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-custom rounded-2xl p-8 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-primary-600 mb-6">
              Send us a message
            </h3>
            {submitted ? (
              <motion.div 
                className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-green-800 font-medium text-lg">Message sent successfully!</h4>
                  <p className="text-green-700 mt-1">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="mx-auto max-w-xl"
              >
                {error && (
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-3 mb-6">
                    <InformationCircleIcon className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">There was an error sending your message. Please try again later.</p>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm transition-all duration-300"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Send message'}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map or additional info could go here */}
      <div className="relative h-48 bg-gradient-to-r from-primary-100 to-secondary-100 mt-10">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        <div className="h-full flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary-800">Ready to Join Our Cybersecurity Community?</h3>
            <p className="mt-2 text-primary-700">Become a part of AUCSS and help build a Cyber Secure Pakistan</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
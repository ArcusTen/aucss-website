"use client";
import { aucss } from "../assets";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import Link from "next/link";
import { Burger, Modal } from "@mantine/core";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const mainNavigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "/#about" },
  { name: "Our Team", href: "/#advisors", 
    submenu: [
      { name: "Advisors", href: "/#advisors" },
      { name: "Executives", href: "/#executives" },
      { name: "Teams", href: "/#teams" },
    ] 
  },
  { name: "AIRange", href: "/#airange" },
  { name: "Hall of Fame", href: "/#halloffame" },
  { name: "Partners", href: "/#cluster" },
  { name: "Events", href: "/#events" },
];

// Flattened navigation for mobile menu
const mobileNavigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "/#about" },
  { name: "Vision", href: "/#vision" },
  { name: "History", href: "/#history" },
  { name: "Advisors", href: "/#advisors" },
  { name: "Executives", href: "/#executives" },
  { name: "Teams", href: "/#teams" },
  { name: "AI Range", href: "/#airange" },
  { name: "Hall of Fame", href: "/#halloffame" },
  { name: "Partners", href: "/#cluster" },
  { name: "Events", href: "/#events" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [background, setBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY >= 90) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleBackground);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleBackground);
      }
    };
  }, []);

  const handleSubmenuToggle = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header
      className={`font-montserrat transition-all duration-500 ${
        background
          ? "fixed top-0 w-full shadow-custom inset-x-0 z-50 bg-white/95 backdrop-blur-sm"
          : "fixed top-0 w-full inset-x-0 z-50 bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
        aria-label="Global"
      >
        <motion.a 
          href="#" 
          className="-m-1.5 p-1.5 hover-lift"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="sr-only">Air University Cyber Security Society</span>
          <Image className="h-14 w-auto" src={aucss} alt="AUCSS Logo" />
        </motion.a>

        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-600 hover:text-primary-500 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </motion.button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {mainNavigation.map((item, index) => (
            item.submenu ? (
              <div key={item.name} className="relative group">
                <motion.button
                  className={`inline-flex items-center gap-1 text-sm font-semibold leading-6 hover:text-secondary-500 transition-colors duration-300 ${
                    active === item.name 
                      ? "text-secondary-500" 
                      : "text-primary-500"
                  }`}
                  onClick={() => handleSubmenuToggle(item.name)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </motion.button>
                
                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => {
                          setActive(subitem.name);
                          setOpenSubmenu(null);
                        }}
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold leading-6 hover:text-secondary-500 transition-colors duration-300 ${
                  active === item.name 
                    ? "text-secondary-500" 
                    : "text-primary-500"
                }`}
                onClick={() => setActive(item.name)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {active === item.name && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            )
          ))}
          <motion.a
            href="/#contact"
            className="btn-primary ml-4 text-sm hover-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as={motion.div}
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="fixed inset-0 z-10 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <Dialog.Panel
              as={motion.div}
              className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-glass"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5 hover-lift">
                  <span className="sr-only">Air University Cyber Security Society</span>
                  <Image className="h-14 w-auto" src={aucss} alt="AUCSS Logo" />
                </a>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-primary-500 hover:bg-primary-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 180, backgroundColor: "rgb(var(--primary-50))" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200 font-montserrat">
                  <div className="space-y-2 py-6">
                    {mobileNavigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-600 hover:bg-primary-50 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.a
                      href="/#contact"
                      className="gradient-animated -mx-3 block rounded-lg px-6 py-3 text-base font-semibold text-white hover:shadow-lg transition-all duration-300 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

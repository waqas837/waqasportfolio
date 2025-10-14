"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-green-400 transition-colors duration-300">
          <span className="hidden sm:inline">MUHAMMAD WAQAS</span>
          <span className="sm:hidden">MW</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <Link
          href="#contact"
          className="bg-green-400 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base"
        >
          Contact me
        </Link>

        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-700"
          >
            <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col gap-5">
              <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLinks({ mobile, onClick }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`
        font-medium transition-all duration-300
        ${
          mobile
            ? "text-gray-300 py-2 px-4 block hover:text-white"
            : "text-gray-300 hover:text-white"
        }
      `}
      onClick={onClick}
    >
      {link.name}
    </Link>
  ));
}
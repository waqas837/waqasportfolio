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
          ? "bg-gray-950/90 backdrop-blur-md py-3 shadow-lg shadow-indigo-900/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white relative group">
          <span>MW.</span>
          <span className="text-indigo-500">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <button
          className="md:hidden text-white focus:outline-none bg-gray-800/80 p-2 rounded-full transition-all hover:bg-gray-700/80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-xl"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-5">
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
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`
        font-medium relative group transition-all duration-300
        ${
          mobile
            ? "text-gray-200 py-2 px-4 block border-l-2 border-gray-800 hover:border-indigo-500"
            : "text-gray-300 hover:text-white"
        }
      `}
      onClick={onClick}
    >
      {link.name}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  ));
}

"use client";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: {
      opacity: 0.3,
      scale: 0.95,
    },
    animate: {
      opacity: [0.3, 0.4, 0.3],
      scale: [0.95, 1, 0.95],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 flex items-center px-6 lg:px-20 overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-indigo-400 font-medium"
            variants={itemVariants}
          >
            Hello, I am
          </motion.h2>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Muhammad waqas
          </motion.h1>

          <motion.div variants={itemVariants}>
            <TypewriterEffect />
          </motion.div>

          <motion.p
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I craft responsive websites and web applications that deliver
            exceptional user experiences. Specializing in both{" "}
            <span className="text-indigo-400 font-medium">
              frontend and backend{" "}
            </span>
            technologies with{" "}
            <span className="text-indigo-400 font-medium">5+ years</span> of
            collective expertise.
          </motion.p>

          <motion.div className="flex gap-4 mt-8" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* <motion.div className="mt-8" variants={itemVariants}>
            <SocialLinks />
          </motion.div> */}
        </motion.div>

        <motion.div
          className="w-full lg:w-2/5 relative aspect-square max-w-[180px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[400px] mx-auto"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hide glow on small screens */}
          <motion.div
            className="hidden sm:block absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-full blur-3xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Enhanced professional gradient background with smoother animation */}
            <div
              className="absolute -z-10 w-96 h-96 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full blur-3xl opacity-60 animate-pulse"
              style={{ animationDuration: "8s" }}
            />

            {/* Secondary gradient with more refined animation */}
            <div
              className="absolute -z-10 w-80 h-80 top-10 left-10 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-40"
              style={{
                animation: "ping 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />

            {/* Tertiary subtle accent bubble */}
            <div className="absolute -z-10 w-48 h-48 bottom-10 right-10 bg-gradient-to-tr from-sky-400 to-blue-500 rounded-full blur-xl opacity-30" />

            {/* Image container with professional styling */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              {/* Border glow effect for elegance */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 z-10"></div>

              {/* Your hero image */}
              <img
                src="/waqas.png"
                alt="Muhammad waqas"
                className="w-full h-full object-cover"
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

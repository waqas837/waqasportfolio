"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 overflow-hidden bg-gray-900 pt-32"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Section - Text Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4">
            <h2 className="text-white text-base sm:text-lg">
              HELLO, I AM
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              MUHAMMAD WAQAS
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-green-400">
              I AM Full Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg max-w-lg"
            variants={itemVariants}
          >
            From Pakistan. I'm a Full Stack Web developer who is passionate about making error-free websites. I am also good at React and Node.js. I love to talk with you about your unique idea.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button className="bg-green-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base">
              Contact me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section - Image and Stats */}
        <motion.div
          className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-end mt-8 lg:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image with green circle background */}
          <div className="relative mb-6 lg:mb-8">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-green-400 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/waqas.png"
                  alt="Muhammad Waqas"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <motion.div
              className="bg-gray-800 border border-green-400 rounded-lg p-4 sm:p-6 text-center flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
              <div className="text-xs sm:text-sm text-gray-300">years of Experience</div>
            </motion.div>
            <motion.div
              className="bg-gray-800 border border-green-400 rounded-lg p-4 sm:p-6 text-center flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Completed Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
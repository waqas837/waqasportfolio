"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Database,
  Server,
  Cpu,
  Monitor,
  Layers,
  Brackets,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    // Frontend
    { name: "HTML5", icon: <FileCode size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <Brackets size={40} className="text-blue-500" /> },
    {
      name: "Tailwind CSS",
      icon: <Brackets size={40} className="text-sky-400" />, // reusing icon, can customize if needed
    },
    {
      name: "JavaScript",
      icon: <Code2 size={40} className="text-yellow-400" />,
    },
    { name: "Vue.js", icon: <Layers size={40} className="text-emerald-400" /> },
    { name: "React.js", icon: <Monitor size={40} className="text-cyan-400" /> },
    { name: "Next.js", icon: <Cpu size={40} className="text-white" /> },

    // Backend
    { name: "Node.js", icon: <Server size={40} className="text-green-500" /> },
    {
      name: "Socket.IO",
      icon: <Cpu size={40} className="text-yellow-500" />, // you can swap icon if you prefer
    },
    {
      name: "MongoDB",
      icon: <Database size={40} className="text-green-400" />,
    },

    // DevOps
    {
      name: "Nginx",
      icon: <Server size={40} className="text-gray-400" />, // placeholder icon
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-28 px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <motion.h2
          className="section-title "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 group-hover:bg-gray-900/70 backdrop-blur-sm h-full">
                <motion.div
                  className="transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <span className="mt-4 text-gray-300 font-medium text-center">
                  {tech.name}
                </span>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 -z-10 blur-md transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            And many more technologies and frameworks I am work with...
          </p>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

"use client";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ),
      title: "FULL-STACK DEVELOPER",
      description: "I'm a Full Stack Web developer who is passionate about making error-free websites with 100% client satisfaction.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ),
      title: "REACT & NODE.JS EXPERT",
      description: "Passionate React and Node.js Developer with a track record of creating over 50+ websites. I find joy in crafting user-friendly, responsive applications.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">WHAT I DO</h2>
          <p className="text-green-400 text-base sm:text-lg">My Services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-green-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

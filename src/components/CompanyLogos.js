"use client";
import { motion } from "framer-motion";

const CompanyLogos = () => {
  const companies = [
    { name: "FeatherDev", logo: "FD" },
    { name: "Spherule", logo: "S" },
    { name: "GlobalBank", logo: "GB" },
    { name: "Nietzsche", logo: "N" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {company.logo}
              </div>
              <span className="font-medium text-sm">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyLogos;

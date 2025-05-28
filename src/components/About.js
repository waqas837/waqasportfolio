"use client";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-28 relative px-6 lg:px-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl -z-10"></div>
      <div className="absolute -left-20 bottom-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl -z-10"></div>

      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I am a passionate{" "}
              <span className="text-indigo-400 font-medium">
                Full Stack Developer
              </span>{" "}
              specializing in modern web applications. My journey began with a
              shared curiosity about digital solutions, which has evolved into
              delivering professional, robust and scalable applications for My
              clients.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              With expertise in both{" "}
              <span className="text-indigo-400 font-medium">
                frontend and backend{" "}
              </span>
              technologies, I am excel at solving complex business challenges
              and transforming ideas into reality through clean, efficient code.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I focuses on{" "}
              <span className="text-indigo-400 font-medium">
                exploring emerging technologies
              </span>
              , contributing to open-source projects, and sharing knowledge
              within the developer community.
            </motion.p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-8 text-white flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 mr-4 rounded-sm"></span>
              My Tech Stacks
            </motion.h3>

            <div className="space-y-6">
              <SkillBar name="Frontend Development" percentage={90} />
              <SkillBar name="Backend Development" percentage={95} />
              <SkillBar name="Database Management" percentage={90} />
              <SkillBar name="Cloud Deployment" percentage={95} />
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-800/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-400 italic">
                "Continuous innovation and mastering new technologies drives me
                to the professional excellence."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

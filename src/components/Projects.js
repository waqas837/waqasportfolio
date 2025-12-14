"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Qhantom Corporation - Web3 Multidimensional Platform",
      description:
        "A cutting-edge full-stack Web3 application featuring multidimensional exploration, quantum artifacts collection, and interactive dimensional experiences with AI integration and blockchain technology.",
      image: "/qhantomcorp.jpg",
      technologies: ["Next.js", "Web3", "Blockchain", "AI Integration", "Database", "Node.js"],
      demoLink: "https://api.furnitrack.com/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/ecom construction.jpg",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://hstconstruction.netlify.app/",
    },
    {
      title: "ERP Platform",
      description:
        "A full-Fledged Furniture ERP platform with payment subscription for customers, user authentication, and admin dashboard.",
      image: "/furnitrack.jpg",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://furnitrack.com/",
    },
    {
      title: "Mindie - Journal Web App",
      description:
        "A journal writer webiste with different free and paid templates.",
      image: "/mindie.jpeg",
      technologies: ["Next.js", "Tailwind CSS", "Supabase"],
      demoLink: "https://mindie1.vercel.app/",
    },
    {
      title: "Q && A Quiz Plateform",
      description:
        "Q && A Quiz Platform allows users to create, participate in, and manage quizzes with scoring and feedback.",
      image: "/quiz game website.jpg",
      technologies: ["React.js", "Node.js", "MySQL"],
      demoLink: "https://tamam-game-project.vercel.app/",
    },
    {
      title: "The Martin Firmpa - Lawyer Firm",
      description:
        "It handles and connect the laywers with actively looking clients to solve their legal issues.",
      image: "/lawfirm.jpg",
      technologies: ["Next.js", "Strapi", "OpenAI API", "Socket.IO"],
      demoLink: "https://themartinfirmpa.vercel.app/",
    },
    {
      title: "The preciselogistics - Trucking Dispatch Company Landing page",
      description:
        "Professional trucking dispatch services that keep your freight moving efficiently and on time.",
      image: "/pl.jpg",
      technologies: ["Next.js", "Strapi", "OpenAI API", "Socket.IO"],
      demoLink: "https://truckdispatch-logistics.vercel.app/",
    },
    {
      title: "The Captcha Solver AI",
      description:
        "Users consume the captchaSolver plateform for legal scraping on other plateforms. This website provide api to use in thier projects.",
      image: "/captcha.jpg",
      technologies: [
        "Next.js",
        "Nginx Proxy Server",
        "AlphaBit Crypto Payment",
      ],
      demoLink: "https://captchasolver.ai/",
    },
    {
      title: "Ecommerce Groccery Store",
      description:
        "Ecommerce Grocery Store enables users to browse, order, and get groceries delivered to their doorstep.",
      image: "/groccerystore.jpg",
      technologies: ["Next.js", "Node.js", "MySQL"],
      demoLink: "https://ecommerce-mu-lake-16.vercel.app/",
    },
  ];

  const moreProjectLinks = [
    "https://drawsketch.co/",
    "https://captchasolver.ai/",
    "https://truckdispatch-logistics.vercel.app/",
    "https://eezup.com/",
    "https://themartinfirmpa.vercel.app/",
    "https://multivender.netlify.app/",
    "https://themartinfirmpa.vercel.app/",
    "https://ecommerce-mu-lake-16.vercel.app/",
    "https://tamam-game-project.vercel.app/",
    "https://dingi-io-frontend.vercel.app/",
    "https://farmingpro.netlify.app",
    "https://hstconstruction.netlify.app/",
    "https://downtodate.org/",
    "https://certiform.netlify.app/",
    "https://miidodashboard.netlify.app/",
    "https://onlinestudycourses.netlify.app/",
    "https://spectrumsite.netlify.app/",
    "https://guardaround.netlify.app/",
    "https://vital-plasma.vercel.app/",
    ,
  ];

  const CardWrapper = ({ children }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const background = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.1), transparent 80%)`;

    useEffect(() => {
      const animateShadow = () => {
        animate(mouseX, [0, 50, 0, -50, 0], {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        });
        animate(mouseY, [0, 30, 0, -30, 0], {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        });
      };
      animateShadow();
    }, []);

    return (
      <motion.div
        style={{ background }}
        onPointerMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - bounds.left);
          mouseY.set(e.clientY - bounds.top);
        }}
        className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 backdrop-blur-sm shadow-2xl"
      >
        {children}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.05), transparent 70%)`,
          }}
        />
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden bg-gray-900"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [0, 30, 0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, -30, 0, 20, 0],
            y: [0, -20, 0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </motion.div>

      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">PORTFOLIO</h2>
          <p className="text-green-400 text-center mb-8 sm:mb-12 lg:mb-16">MY Cases</p>
        </motion.div>

        {/* Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 0.77, 0.47, 0.97],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <CardWrapper>
                <motion.div
                  className="relative h-80 w-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90" />
                </motion.div>

                <div className="p-8">
                  <motion.h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </motion.h3>
                  <motion.p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs font-mono bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full border border-gray-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex">
                    <motion.a
                      href={project.demoLink}
                      className="relative overflow-hidden px-5 py-2 rounded-full text-sm font-medium"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: "#6366f1",
                        color: "white",
                      }}
                    >
                      <span className="relative z-10">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </CardWrapper>
            </motion.div>
          ))}
        </div>

        {/* More Projects - Elegant Link List */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            All Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {moreProjectLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-green-300 border border-gray-600 rounded-md p-4 bg-gray-700/30 backdrop-blur transition-all hover:border-green-400"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {link
                  .replace("https://", "")
                  .replace("www.", "")
                  .replace("/", "")}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p className="text-gray-600 text-lg mb-6">
            Interested in seeing more of My work?
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-green-400 text-green-400 rounded-lg hover:border-green-500 hover:text-green-500 group transition-all"
            whileHover={{
              y: -3,
              backgroundColor: "rgba(34, 197, 94, 0.1)",
            }}
          >
            <span>Let's discuss your project</span>
            <motion.span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

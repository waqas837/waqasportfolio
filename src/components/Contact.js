"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { sendContactEmail } from "@/lib/sendEmail";
 
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.subject);
      formDataObj.append("message", formData.message);

      const result = await sendContactEmail(formDataObj);

      if (result.error) {
        throw new Error(result.error);
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Taunsa Sharif, DG Khan, Pakistan",
      delay: 0.1,
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "waqaskhanbughlani1124@gmail.com",
      delay: 0.2,
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+92 320 5858954",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(39, 39, 42, 0.5), transparent), radial-gradient(ellipse at bottom, rgba(30, 58, 138, 0.2), transparent)",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Let's Connect
          </h2>
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ width: "120px" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-gray-300 mb-10 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              I am interested in{" "}
              <span className="text-indigo-400">freelance opportunities</span> –
              especially ambitious or large projects. However, if you have other
              requests or questions, don't hesitate to reach out.
            </motion.p>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: item.delay, duration: 0.6 }}
                >
                  <motion.div
                    className="p-4 bg-gray-800 rounded-xl text-indigo-400 group-hover:bg-indigo-600/10 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-green-900/30 border border-green-700 rounded-full text-green-300 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-red-900/30 border border-red-700 rounded-full text-red-300 text-center"
                >
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                  placeholder="Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                placeholder="Project Inquiry"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600 resize-none"
                placeholder="Hello, I am interested in..."
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full font-medium transition-all duration-300 group ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-indigo-500 hover:to-indigo-400"
                }`}
                whileHover={!isLoading ? { y: -2, scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                {!isLoading && (
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform"
                    initial={{ x: 0 }}
                  >
                    <Send size={18} />
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

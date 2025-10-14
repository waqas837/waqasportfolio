"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client Review 1",
      image: "/testimonials/Screenshot 2025-10-14 165445.jpg"
    },
    {
      name: "Client Review 2", 
      image: "/testimonials/Screenshot 2025-10-14 165346.jpg"
    },
    {
      name: "Client Review 3",
      image: "/testimonials/Screenshot 2025-10-14 165328.jpg"
    },
    {
      name: "Client Review 4",
      image: "/testimonials/Screenshot 2025-10-14 165309.jpg"
    },
    {
      name: "Client Review 5",
      image: "/testimonials/Screenshot 2025-10-14 165107.jpg"
    }
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">TESTIMONIALS</h2>
          <p className="text-green-400 text-base sm:text-lg">What my Clients are saying?</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.name}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
                loading={index < 2 ? "eager" : "lazy"}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

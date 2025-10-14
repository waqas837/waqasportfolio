import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

// Lazy load non-critical components
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});

const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gray-900">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* About Section */}
      <About />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Projects Section */}
      <Projects />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
    </main>
  );
}

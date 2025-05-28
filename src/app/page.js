import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </main>
  );
}

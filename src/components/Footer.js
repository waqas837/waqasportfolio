// app/components/Footer.js
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-20 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Muhammad waqas<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <Link
              href="#home"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-white transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Muhammad Waqas.
          </p>

          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            I will Create <span className="text-red-500">♥</span> Stunning
            Websites
          </p>
        </div>
      </div>
    </footer>
  );
}

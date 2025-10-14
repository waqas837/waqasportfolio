// app/components/Footer.js
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-20 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Muhammad waqas<span className="text-green-400">.</span>
            </Link>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Full Stack Web Developer</p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
            <Link
              href="#home"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-green-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Muhammad Waqas.
          </p>
        </div>
      </div>
    </footer>
  );
}

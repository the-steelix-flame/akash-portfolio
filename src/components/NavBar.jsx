import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
     <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        {/* Top bar with Hamburger (Logo removed) */}
        <div className="inner relative z-50 w-full flex justify-end">

          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className={`block w-7 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-7 h-[2px] bg-white transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-7 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Full-Screen Glassmorphism Overlay (Moved OUTSIDE the header) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col justify-between items-center pt-32 pb-12 transition-all duration-500 ease-in-out z-[90] ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        {/* Top: Your Name */}
        <h2 className="text-white-50/50 text-xl md:text-2xl tracking-[0.3em] font-light uppercase">
          Akash Kumar
        </h2>

        {/* Center: Main Navigation */}
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              onClick={() => setIsOpen(false)}
              className="text-white-50 text-4xl md:text-5xl font-semibold transition-colors duration-300 hover:text-white"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 rounded-xl bg-white text-black text-xl md:text-2xl font-bold transition-all duration-300 hover:bg-black-50 hover:text-white"
          >
            Contact me
          </a>
        </nav>

        {/* Bottom: Social Links */}
        <div className="flex space-x-8 text-white-50 text-sm md:text-base font-medium tracking-wide uppercase">
          <a 
            href="https://www.instagram.com/goku_x_akash.5/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            Insta
          </a>
          <a 
            href="https://www.linkedin.com/in/ak-a-sh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/the-steelix-flame" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
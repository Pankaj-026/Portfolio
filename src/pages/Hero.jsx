import { Link } from "react-router-dom";
import HeroImage from "../assets/images/user.png"; 
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


export default function Hero() {

  const typingRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typingRef.current, {
            strings: ["FrontEnd Developer", "Web Developer", "Full Stack Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy(); // Clean up the instance
        };
    }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-44 px-6 md:px-16 bg-[var(--bg)]">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-[var(--primary)]">
            Hello, I'm Pankaj Gupta
          </h1>
          <p className="mt-2 text-2xl text-[var(--text)]">
          Your vision, my code...let’s create something crazy! <br /> A passionate <span ref={typingRef} ></span>
          </p>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-[var(--primary)] text-[var(--button-text)] rounded-lg shadow-md hover:shadow-lg transition-all">
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-[var(--button-text)] transition-all">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-40 h-40 md:w-60 md:h-60">
          <img
            src={HeroImage}
            alt="Pankaj Gupta"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}

import HeroImage from "../assets/images/hero3.jpg";
import DownloadPng from "../assets/images/download.png";

// import Typed from "typed.js";
// import { useEffect, useRef } from "react";
import About from "./About";
import Project from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

export default function Hero() {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  // const typingRef = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(typingRef.current, {
  //     strings: [
  //       "a Front End Developer",
  //       "a Web Developer",
  //       "a Full Stack Developer",
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 30,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: "|",
  //     autoInsertCss: true,
  //   });

  //   return () => typed.destroy();
  // }, []);

  return (
    <>
      <div className="relative flex flex-col min-h-screen w-full items-center justify-center bg-white dark:bg-black px-4 sm:px-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <section id="home" className="relative z-20 py-24 sm:py-40 md:py-60 w-full">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-0 sm:px-14">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left sm:px-10 px-0">
              <h1 className={cn("text-2xl sm:text-4xl md:text-5xl py-0 md:py-2 font-bold text-transparent relative z-20 mb-4 bg-clip-text",
                isDarkMode ? "bg-gradient-to-b from-neutral-200 to-neutral-500 " :
                  "bg-gradient-to-b from-neutral-700 to-neutral-500")}>
                Hi, I'm Pankaj Gupta
              </h1>

              <div className="mb-6 h-10 sm:h-14 md:h-16 flex items-center justify-center md:justify-start">
                <span className="text-lg sm:text-2xl md:text-3xl text-[var(--text)] text-transparent relative z-20 mb-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text">
                  a
                  <ContainerTextFlip
                    words={[
                      "Front-End Developer",
                      "Web Developer",
                      "Full-Stack Developer",
                    ]}
                  />
                </span>
              </div>

              <p className="text-sm sm:text-lg md:text-lg text-[var(--text)] mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Passionate about crafting scalable web applications with modern
                technologies. Let's turn your vision into exceptional digital
                experiences!
              </p>

              <div className="flex   gap-4 justify-center md:justify-start">
                <a href="#projects">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center cursor-pointer space-x-2 text-xs"
                  >
                    View Projects
                  </HoverBorderGradient>
                </a>
                <a
                  href="/CvSP.pdf"
                  download className="relative bg-black dark:bg-white dark:text-black text-white w-fit px-6 py-2 rounded-4xl text-xs overflow-hidden group cursor-pointer ">
                  <span className="block transition-transform duration-500 group-hover:translate-x-40">
                    My Resume
                  </span>

                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-[-10rem] group-hover:translate-x-0 z-10 ">
                    <img src={DownloadPng} alt="download" className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <img
                  src={HeroImage}
                  alt="Pankaj Gupta"
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-[var(--primary)]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

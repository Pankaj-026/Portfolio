import HeroImage from "../assets/images/hero3.jpg";
// import Typed from "typed.js";
// import { useEffect, useRef } from "react";
import About from "./About";
import Project from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
// import { cn } from "@/lib/utils";

export default function Hero() {
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
      {/* <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        /> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}

        <section id="home" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 bg-[var(--bg)] py-10">
          {/*         
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Backgrounds
          </p> */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                Hi, I'm Pankaj Gupta
              </h1>

              <div className="mb-6 h-12 sm:h-14 md:h-16">
                <span className="text-xl sm:text-2xl md:text-3xl text-[var(--text)]">
                  a
                  <ContainerTextFlip
                    words={[
                      "Front-End Developer",
                      "Web Developer",
                      "Full-Stack Developer",
                    ]}
                  />
                  {/* <span
                  ref={typingRef}
                  className="font-medium"></span> */}
                </span>
              </div>

              <p className="text-base sm:text-lg md:text-lg text-[var(--text)] mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Passionate about crafting scalable web applications with modern
                technologies. Let's turn your vision into exceptional digital
                experiences!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--primary)] text-[var(--button-text)] rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
                  View Projects
                </a>
                <a
                  href="/CvSP.pdf"
                  download
                  className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-[var(--button-text)] transition-all text-sm sm:text-base">
                  Download CV
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <img
                  src={HeroImage}
                  alt="Pankaj Gupta"
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-[var(--primary)]"
                />
              </div>
            </div>
          </div>
        </section>
      {/* </div> */}
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

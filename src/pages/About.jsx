export default function About() {
  return (
    <section id="about" className="min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 py-6 md:py-16 text-[var(--text)] bg-[var(--bg)]">
      {/* About Me Section */}
      <h2 className="text-[var(--primary)] text-[2rem] font-bold border-b border-[var(--primary)] pb-3 mb-6">
        About Me
      </h2>

      <p className="text-base md:text-lg leading-relaxed md:leading-loose">
          I am{" "}
          <span className="text-[var(--secondary)] font-semibold">
            Pankaj Gupta
          </span>
          , an aspiring{" "}
          <span className="text-[var(--secondary)]">Full Stack Developer</span>{" "}
          passionate about creating intuitive and efficient digital solutions. I
          specialize in React, JavaScript, and modern web technologies. I thrive
          on solving complex problems and turning ideas into reality through code.
          <br /><br />
          My journey into software development started with a deep curiosity for
          how things work on the web. Over time, I honed my skills in frontend
          development with React.js, while expanding my backend expertise in
          Node.js, Express, and MongoDB.
          <br /><br />
          Beyond coding, I've led college initiatives like DLLE and PR management
          for inter-college fests, developing essential skills in communication,
          teamwork, and project management. When I'm not coding, you can find me
          reading tech blogs, playing{" "}
          <span className="text-[var(--secondary)]">chess</span> or{" "}
          <span className="text-[var(--secondary)]">basketball</span>, and
          exploring new technologies.
        </p>

      {/* Education Section */}
      <h3 className="text-[var(--primary)] text-[2rem] font-bold border-b border-[var(--primary)] mt-12 mb-6">
        Education
      </h3>

      <div className="space-y-6">
        {/* University 1 */}
        <div className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
          <h4 className="text-[var(--title-size)] font-medium">
            LS Raheja College of Arts And Commerce
          </h4>
          <p className="text-[var(--text)]/80">BSc in Information Technology</p>
          <p className="text-[var(--primary)]">CGPA: 9.5</p>
        </div>

        {/* University 2 */}
        <div className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
          <h4 className="text-[var(--title-size)] font-medium">
            S.T Mary’s Junior College
          </h4>
          <p className="text-[var(--text)]/80">Higher Secondary Education</p>
          <p className="text-[var(--primary)]">Percentage: 72%</p>
        </div>
      </div>
    </section>
  );
}

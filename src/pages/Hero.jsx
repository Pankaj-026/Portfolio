import { Link } from "react-router-dom";
import HeroImage from "../assets/images/spLogo.png"; // Replace with your image

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 bg-[var(--bg)]">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-[var(--primary)]">
          Hi, I'm Pankaj Gupta
        </h1>
        <p className="mt-2 text-lg text-[var(--text)]">
          A passionate Full Stack Developer 🚀
        </p>
        <div className="mt-4 flex gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all"
          >
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
  );
}

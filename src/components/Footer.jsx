import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--bg)] text-[var(--text)] border-t border-[var(--primary)]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-[var(--primary)] font-[var(--font-heading)]">
              Pankaj Gupta
            </h3>
            <p className="text-lg leading-relaxed font-[var(--font-body)]">
              A passionate developer creating web solutions with modern
              technologies. Focused on building responsive, accessible, and
              performant applications.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Pankaj-026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[var(--primary)] transition-colors duration-300">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/pankaj026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[var(--primary)] transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[var(--primary)] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a
                href="mailto:pankajgupta1063@gmail.com"
                className="text-2xl hover:text-[var(--primary)] transition-colors duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-[var(--font-heading)]">
              Quick Links
            </h4>
            <ul className="space-y-2 font-[var(--font-body)]">
              <li>
                <a
                  href="#home"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-[var(--font-heading)]">
              Contact Me
            </h4>
            <ul className="space-y-3 font-[var(--font-body)]">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[var(--primary)]" />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--primary)]" />
                <a
                  href="mailto:pankajgupta1063@gmail.com"
                  className="hover:text-[var(--primary)] transition-colors duration-300">
                  pankajgupta1063@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[var(--primary)]" />
                <a href='tel:+918591272429'>+91 XXXXX XXXXX</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-[var(--primary)]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center font-[var(--font-body)]">
          <p>© {new Date().getFullYear()} Pankaj Gupta. All rights reserved.</p>
          <p className="flex space-x-6 mt-4 md:mt-0">
            Built with ❤️ using React and Tailwind CSS.
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

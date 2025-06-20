import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DarkLogo from "../assets/images/spLogo.png";
import LightLogo from "../assets/images/spark.png";
import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);



  const NavItems = ({ items, className, onItemClick, mobile = false }) => {
    const [hovered, setHovered] = useState(null);

    return (
      <motion.div
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800",
          mobile ? "flex" : "hidden lg:flex",
          className,
        )}
      >
        {items.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => {
              if (onItemClick) onItemClick();
              setMenuOpen(false);
            }}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
            key={`link-${idx}`}
            to={`/${item.link}`}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    );
  };

  // Theme change observer
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

  // Scroll observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <nav
        className={`flex items-center justify-between px-6 md:px-8 py-3 bg-[var(--bg)] text-[var(--text)] rounded-full w-[90%] max-w-6xl transition-all duration-300 shadow-md ${scrolled ? "py-2 backdrop-blur-sm bg-[var(--bg-opacity)]" : ""
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src={isDarkMode ? DarkLogo : LightLogo}
            alt="Logo"
            className="w-10 h-10 hover:scale-105 transition-transform"
          />
          {/* <span className="font-semibold hidden sm:inline-block">Sp Portfolio</span> */}
        </Link>

        {/* Desktop Navigation */}
        <NavItems
          items={[
            { name: "Home", link: "home" },
            { name: "About", link: "about" },
            { name: "Projects", link: "projects" },
            { name: "Skills", link: "skills" },
            { name: "Contact", link: "contact" },
          ]}
          onItemClick={() => setMenuOpen(false)}
          mobile={false}
        />

        <ThemeSwitcher />


        {/* CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            ref={buttonRef}
            className="p-2 z-50 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X size={28} className="text-[var(--text)]" />
            ) : (
              <Menu size={28} className="text-[var(--text)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed z-40 top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[var(--bg)] backdrop-blur-md rounded-xl text-[var(--text)] px-6 py-4 md:hidden transition-all duration-300 shadow-lg"
        >
          <ul className="flex flex-col gap-4 text-base">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <NavItem
                  to={item.toLowerCase()}
                  className="block w-full px-3 py-2 rounded-md hover:bg-[var(--primary-light)] transition"
                >
                  {item}
                </NavItem>
              </li>
            ))}
            <li>
              <div className="mt-4">
                <ThemeSwitcher mobile />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
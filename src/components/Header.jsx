import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DarkLogo from "../assets/images/spLogo.png";
import LightLogo from "../assets/images/spark.png";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const menuRef = useRef(null);

  const NavItem = ({ to, children, onClick, className }) => (
    <Link
      to={`/${to}`}
      className={`text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300 font-medium ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  return (
    <nav className="py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 flex justify-between items-center bg-[var(--bg)] shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="z-50">
        <img
          src={isDarkMode ? DarkLogo : LightLogo}
          alt="Logo"
          className="w-12 h-12 hover:scale-105 transition-transform"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <NavItem key={item} to={item.toLowerCase()}>
            {item}
          </NavItem>
        ))}
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 z-50 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <X size={28} className="text-[var(--text)]" />
        ) : (
          <Menu size={28} className="text-[var(--text)]" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-[var(--bg)] transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
          <div className="flex flex-col items-center gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <NavItem
                key={item}
                to={item.toLowerCase()}
                onClick={() => setMenuOpen(false)}
                className="text-2xl"
              >
                {item}
              </NavItem>
            ))}
            <div className="mt-8">
              <ThemeSwitcher mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

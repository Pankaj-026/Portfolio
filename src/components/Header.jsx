import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Mobile menu icon
import { useState, useEffect } from "react";
import DarkLogo from "../assets/images/spLogo.png";
import LightLogo from "../assets/images/spark.png";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Watch for theme changes and update logo
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Listen for class changes (Tailwind dark mode)
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="p-4 px-6 flex justify-between items-center bg-[var(--bg)] shadow-md">
      {/* ✅ Logo - Automatically Updates on Theme Change */}
      <Link to="/">
        <img
          src={isDarkMode ? DarkLogo : LightLogo}
          alt="Logo"
          className="w-12 h-12"
        />
      </Link>

      {/* ✅ Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <NavItem key={item} to={item.toLowerCase()}>
            {item}
          </NavItem>
        ))}
        <ThemeSwitcher />
      </div>

      {/* ✅ Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={28} />
      </button>

      {/* ✅ Mobile Menu (Shows only when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-[var(--bg)] shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <NavItem key={item} to={item.toLowerCase()} onClick={() => setMenuOpen(false)}>
              {item}
            </NavItem>
          ))}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
}

/* ✅ Reusable NavItem Component (Simplifies Navigation Code) */
const NavItem = ({ to, children, onClick }) => (
  <Link
    to={`/${to}`}
    className="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

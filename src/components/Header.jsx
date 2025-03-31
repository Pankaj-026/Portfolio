import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Icon for mobile menu
import { useState, useEffect } from "react";
import  LightLogo from "../assets/images/spLogo.png";
import HeaderLogo from "../assets/images/spark.png";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoChange, setLogoChange] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Update logo based on theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLogoChange(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="p-4 px-6 flex justify-between items-center bg-[var(--bg)] shadow-md">
      {/* Logo */}
      <Link to="/">
        <img
          src={logoChange ? LightLogo : HeaderLogo} // Fix: Use LightLogo for dark mode
          alt="Logo"
          className="w-12 h-12"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300">
            {item}
          </Link>
        ))}
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-[var(--bg)] shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300"
              onClick={() => setMenuOpen(false)} // Fix: Close menu on click
            >
              {item}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
}

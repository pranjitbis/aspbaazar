// Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaServicestack,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import "../../css/Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaUser />, href: "/about" },
    { name: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">AspBaazar</span>
          <span className="logo-dot">.</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <a href={item.href} className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="cta-button">
            <a href="tel:">
              Call Now <IoMdCall />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

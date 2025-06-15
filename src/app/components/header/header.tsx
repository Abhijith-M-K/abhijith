'use client'; 
import React, { useState } from "react";
import styles from "./header.module.scss";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Abhijith M K</div>

      <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about-us" onClick={closeMenu}>About Us</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#works" onClick={closeMenu}>Works</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;

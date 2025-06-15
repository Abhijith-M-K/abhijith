import React from "react";
import styles from "./footer.module.scss";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Abhijith M K. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/abhi_ji_th_m_k/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

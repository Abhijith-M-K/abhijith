import React from "react";
import aboutImage from "../../assets/about.jpg"
import styles from "./about.module.scss"; 


const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs} id="about-us">
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          {/* <img src={aboutImage} alt="About Glow Beauty" /> */}
          <img src={aboutImage.src} alt="About Glow Beauty" />

        </div>
        <div className={styles.textSection}>
          <h2>About Me</h2>
          <p>
            I'm Abhijith, a passionate Full Stack Developer with over 2 years of professional experience. I specialize in building modern,
            scalable web applications using technologies like <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Next.js</strong>,
            <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>, <strong>HTML</strong>,
            <strong>CSS</strong>,<strong>Kafka</strong> and <strong>SCSS</strong>.
          </p>
          <p>
            I’ve successfully delivered more than 6 live corporate projects, contributing to both frontend design and backend architecture.
            My work focuses on performance, maintainability, and delivering real business value through code. I love turning complex problems
            into elegant solutions and continuously learning new technologies to stay at the forefront of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

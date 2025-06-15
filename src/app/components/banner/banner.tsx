import React from "react";
import styles from "./banner.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Crafting Code, Building Futures</h1>
          <p>I'm a Full Stack Developer specializing in modern web technologies—bringing ideas to life from frontend to backend.</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

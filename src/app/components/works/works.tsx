import React from "react";
import styles from "./works.module.scss";

import work1 from "../../assets/loan.jpg";
import work2 from "../../assets/builders.jpg";
import work3 from "../../assets/event.jpg";
import work4 from "../../assets/pharmacist-work.jpg";
import work5 from "../../assets/top-view-photo-camera-indoors-still-life.jpg";
import work6 from "../../assets/Work 2.jpg";

const workItems = [
  {
    image: work1,
    title: "Loan Management System",
    description: "An Integrated Loan Management System combines loan administration with financial accounting in a single platform."
  },
  {
    image: work2,
    title: "Casagrand",
    description: "Customer Delight Application with a powerful admin dashboard to streamline customer engagement and service tracking."
  },
  {
    image: work3,
    title: "Digital Raffle",
    description: "An event-based raffle application built for the Consulate General of India in Germany to manage digital draws."
  },
  {
    image: work4,
    title: "PAMCO",
    description: "A smart registration and dashboard system designed for streamlined application processing and management."
  },
  {
    image: work5,
    title: "Freelancer Photographer Portfolio",
    description: "A modern, visually striking portfolio app for photographers to showcase their work, client reviews, and contact info."
  },
  {
    image: work6,
    title: "Beauty Parlour Management App",
    description: "Developed a complete beauty parlour app."
  }
];



const Works: React.FC = () => {
  return (
    <section id="works" className={styles.worksSection}>
      <h2 className={styles.sectionTitle}>My Works</h2>
      <div className={styles.gallery}>
        {workItems.map((work, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={work.image.src} alt={work.title} />
            <div className={styles.cardContent}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

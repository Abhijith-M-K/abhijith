import React from "react";
import styles from "./services.module.scss";

const servicesData = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-friendly interfaces with responsive and modern design principles.",
  },
  {
    title: "Frontend Development",
    description: "Building interactive, high-performance web apps using React.js, Vue.js, and Next.js.",
  },
  {
    title: "Backend Development",
    description: "Developing robust and scalable server-side logic with Node.js and Express.js.",
  },
  {
    title: "Database Management",
    description: "Designing and managing efficient databases using MySQL and MongoDB.",
  },
  {
    title: "API Integration",
    description: "Creating and integrating RESTful APIs to connect frontend with backend systems seamlessly.",
  },
  {
    title: "Deployment & DevOps",
    description: "Deploying full-stack applications with best practices using Vercel, Netlify, and cloud platforms.",
  },
  {
  title: "Code Optimization & Refactoring",
  description: "Improving code quality, performance, and maintainability through clean coding practices and refactoring.",
},
{
  title: "Version Control & Collaboration",
  description: "Efficient project management using Git, GitHub, and collaborative workflows for team-based development.",
}
];


const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

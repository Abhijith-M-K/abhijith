// import React from "react";
// import styles from "./contact.module.scss";

// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className={styles.contactSection}>
//       <div className={styles.container}>
//         {/* Left: Contact Details */}
//         <div className={styles.contactInfo}>
//           <h2>Contact Us</h2>
//           <p>Glow Beauty Studio</p>
//           <p>123 Beauty Lane, Glamour City</p>
//           <p>Email: hello@glowbeauty.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//           <p>Open: Mon - Sat, 10am - 7pm</p>
//         </div>

//         {/* Right: Contact Form */}
//         <div className={styles.contactForm}>
//           <h2>Send a Message</h2>
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea rows={5} placeholder="Your Message" required></textarea>
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import styles from "./contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Side: Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> abhijithj331@gmail.com</p>
          <p><strong>Phone:</strong> +91 9072711213</p>
          <p><strong>Location:</strong> Calicut,Kerala, India</p>
        </div>

        {/* Right Side: Button */}
        <div className={styles.contactAction}>
          <h2>Get In Touch</h2>
          <a
            href="mailto:abhijithj331@gmail.com"
            className={styles.contactButton}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

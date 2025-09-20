import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "./ContactUs.css";

const socialLinks = [
  { icon: <FaFacebook />, href: "#", color: "#1877f2" },
  { icon: <FaTwitter />, href: "#", color: "#1da1f2" },
  { icon: <FaInstagram />, href: "#", color: "#e4405f" },
  { icon: <FaLinkedin />, href: "#", color: "#0a66c2" },
  { icon: <FaEnvelope />, href: "mailto:info@example.com", color: "#ea4335" },
];

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <div className="hero">
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt="Contact Banner"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="overlay" />
        <motion.div
          className="hero-text"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <h1>Let’s Connect with us</h1>
          <p>
            Have a project in mind? We’d love to hear from you.
            <br /> Drop us a message and let’s start a conversation.
          </p>
          <motion.a
            href="#"
            className="talk-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Talk
          </motion.a>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="social-section">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: link.color }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.015, duration: 0.6 }}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;

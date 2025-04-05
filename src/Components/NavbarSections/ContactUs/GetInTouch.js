import React from "react";
import { FaPhone, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../../../Styles/ContactUs.css";

const GetInTouch = () => {
  return (
    <section className="contact-us-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        We’re here to answer your questions and guide you every step of the way. Whether you're interested in selling your business, seeking financing, or need expert valuation services, our team is ready to assist you.
        Contact us today to start a conversation and explore how we can help you achieve your business goals.
      </p>
      <ul className="contact-list">
        <li>
          <FaPhone className="contact-icon" />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </li>
        <li>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@eterna.com">info@eterna.com</a>
        </li>
        <li>
          <FaFacebookF className="contact-icon" />
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Page
          </a>
        </li>
        <li>
          <FaLinkedinIn className="contact-icon" />
          <a
            href="https://www.linkedin.com/company/your-company"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Page
          </a>
        </li>
      </ul>
      <p className="contact-text">We look forward to working with you and helping you achieve success!</p>
    </section>
  );
};

export default GetInTouch;

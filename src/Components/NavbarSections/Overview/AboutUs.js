import React from "react";
import "../../../Styles/AboutUs.css"; 
import AboutUsImage from "../../../Styles/images/consult.jpg"; 

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Column - Text */}
        <div className="about-us-text">
          <div className="text-wrapper">
            <h1>About Us</h1>
            <p>In fact, we’re all about you</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="about-us-image">
          <img src={AboutUsImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

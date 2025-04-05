import React from "react";
import "../Styles/SecHeroSection.css";
import backgroundImage from "../Styles/images/get-a-valuation.jpg"; 

const SecHeroSection = () => {
    const handleRedirect = () => {
        window.location.href = "/valuation-services"; 
      };

  return (
    <section
      className="sec-hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="sec-hero-content">
        <h1 className="sec-hero-title">Know your worth</h1>
        <p className="sec-hero-description">
        Is your business worth more than you think? It just might be. Understanding the true value of your funeral home or cemetery is a vital first step in maximizing its potential. At Eterna, we provide accurate, insightful business valuations to help you make informed decisions and plan for the future with confidence.        </p>
        <button className="start-planning-btn"  onClick={handleRedirect}>Get a Valuation</button>
      </div>
    </section>
  );
};

export default SecHeroSection;

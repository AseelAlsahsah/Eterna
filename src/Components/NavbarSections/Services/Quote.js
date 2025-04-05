import React from "react";
import "../../../Styles/Quote.css"; 
import QuoteImage from "../../../Styles/images/services-header.jpg"; 

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left Column - Text */}
        <div className="quote-text">
          <div className="text-wrapper">
            <h1>Our Services</h1>
            <p>How We’re Uniquely Prepared to Help</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="quote-image">
          <img src={QuoteImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default Quote;

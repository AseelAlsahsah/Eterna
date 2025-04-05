import React from "react";
import "../../../Styles/Quote.css"; 
import QuoteImage from "../../../Styles/images/contact-us-header.jpg"; 

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left Column - Text */}
        <div className="quote-text">
          <div className="text-wrapper">
            <h1>Contact Us</h1>
            <p>We’re Always Here For You!</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="quote-image">
          <img src={QuoteImage} alt="quote" />
        </div>
      </div>
    </section>
  );
};

export default Quote;

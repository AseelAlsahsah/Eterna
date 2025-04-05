import React from "react";
import "../../../Styles/Quote.css";
import QuoteImage from "../../../Styles/images/man-with-glasses.jpg"; 

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left Column - Text */}
        <div className="quote-text">
          <div className="text-wrapper">
            <h1>Business Lifecycle</h1>
            <p>We’re With You Every Step of the Way</p>
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

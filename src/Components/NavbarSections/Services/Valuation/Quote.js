import React from "react";
import "../../../../Styles/Quote.css"; 
import QuoteImage from "../../../../Styles/images/valuation-services-header.jpg"; 

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left Column - Text */}
        <div className="quote-text">
          <div className="text-wrapper">
            <h1>Valuation Services</h1>
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

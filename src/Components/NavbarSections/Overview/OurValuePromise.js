import React from "react";
import "../../../Styles/OurValuePromise.css"; 
import ValuePromiseIcon from "../../../Styles/images/promise.png";

const OurValuePromise = () => {
  return (
    <section className="our-value-promise-section">
      <div className="our-value-promise-container">
        <img src={ValuePromiseIcon} alt="Value Promise Icon" className="value-promise-icon" />
        <h2>Our Value Promise</h2>
        <p className="our-value-promise-text">
        When you partner with Eterna, you’re choosing a team committed to your growth. Our promise is simple: increased performance, stronger profitability, and lasting success at every stage of your business lifecycle. We’re here to help you improve and maximize your enterprise value.
        </p>
      </div>
    </section>
  );
};

export default OurValuePromise;

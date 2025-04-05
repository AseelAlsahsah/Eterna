import React from "react";
import "../../../Styles/BusinessLifecycle.css"; 
import businessImage from "../../../Styles/images/business-lifecycle.png"; 

const Stages = () => {
  return (
    <section className="business-lifecycle-section">
      <h2 className="business-lifecycle-title">From Start to Finish, You Can Count on Eterna</h2>
      <p className="business-lifecycle-text">
      Whether you’re taking the first step in owning a funeral home or cemetery, or preparing to transition out, Eterna Funeral Homage & Cemetery Consulting is here to guide you through every stage. With deep industry experience and unwavering reliability, our team is committed to helping you grow, increase value, and determine the right time — and way — to move forward.
      </p>
      <img src={businessImage} alt="Business Lifecycle" className="business-lifecycle-image" />
    </section>
  );
};

export default Stages;

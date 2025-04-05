import React from "react";
import "../Styles/nextStepSection.css";
import businessLifecycleImg from "../Styles/images/business-lifecycle.png"; 

const NextStepSection = () => {
  const handleRedirect = () => {
    window.location.href = "/business-lifecycle"; 
  };

  return (
    <div className="next-step-section">
      <div className="text-content">
        <p>
          <span className="bold-text">Not Sure What Comes Next? Let Eterna Be Your Guide.</span><br /><br />
          Making the right moves at each stage of your business journey is key to long-term success. Whether you’re just starting out, looking to grow, or preparing to transition, our experienced team is here to help you navigate the path ahead with clarity and confidence.
          <br /><br />
          What’s your next move? Let Eterna show you the way.
        </p>
        <button className="start-planning-btn" onClick={handleRedirect}>
          Start Planning
        </button>
      </div>
      <div className="image-content">
        <img src={businessLifecycleImg} alt="Business Lifecycle" />
      </div>
    </div>
  );
};

export default NextStepSection;

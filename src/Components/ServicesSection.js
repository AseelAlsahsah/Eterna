import React from "react";
import "../Styles/servicesSection.css"; 

const ServicesSection = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="services-section">
      <div className="service-item" onClick={() => handleRedirect("/services-overview")}>
        <p>I Want To</p>
        <h2>Grow and Enhance My Business</h2>
        <p>Explore Our Services &gt;</p>
      </div>
      <div className="service-item" onClick={() => handleRedirect("/sell-my-business")}>
        <p>I Want To</p>
        <h2>Plan My Exit Strategy</h2>
        <p>Begin the Selling Process &gt;</p>
      </div>
    </div>
  );
};

export default ServicesSection;

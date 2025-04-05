import React from "react";
import "../../../Styles/ServicesGrid.css";
import firstIcon from "../../../Styles/images/sell-my-business.png"; 
import secondIcon from "../../../Styles/images/icon-consulting-services.svg";
import thirdIcon from "../../../Styles/images/performance-tracker.png";
import fourthIcon from "../../../Styles/images/accounting.png";

const handleRedirect = (route) => {
  window.location.href = route;
};

const ServicesCards = () => {
  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid-item">
          <img src={firstIcon} alt="Mergers and Acquisitions Consulting" className="grid-icon" />
          <h3 className="grid-title">Mergers and Acquisitions Consulting</h3>
          <p className="grid-text">
          We specialize in connecting well-prepared sellers with serious, pre-qualified buyers. With access to one of the industry’s largest databases of active prospects, we’re able to maximize value and ensure a smooth transition because this is what we do, every day.
          </p>
          <button onClick={() => handleRedirect("/funeral-home-ma-overview")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={secondIcon} alt="Consulting Services" className="grid-icon" />
          <h3 className="grid-title">Consulting Services</h3>
          <p className="grid-text">
          Let’s partner to unlock your business’s full potential. Our consulting solutions are tailored to boost operational performance and drive enterprise value no matter what stage your business is in.
          </p>
          <button onClick={() => handleRedirect("/business-consulting-overview")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={thirdIcon} alt="Valuation" className="grid-icon" />
          <h3 className="grid-title">Valuation</h3>
          <p className="grid-text">
          Get a clear, data-driven picture of your funeral home or cemetery business. Our expert valuation helps you understand its true worth, guiding your decisions whether you're selling, growing, or planning ahead.
          </p>
          <button onClick={() => handleRedirect("/valuation-services")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={fourthIcon} alt="Accounting & Financial Management" className="grid-icon" />
          <h3 className="grid-title">Accounting & Financial Management</h3>
          <p className="grid-text">
          We don’t just understand numbers we understand the funeral and cemetery profession. Our detailed benchmarking, financial reporting, and trend analysis services are designed to help you make smarter, more confident business decisions.
          </p>
          <button onClick={() => handleRedirect("/accounting-financial-management")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;

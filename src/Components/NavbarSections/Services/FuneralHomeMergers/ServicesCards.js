import React from "react";
import "../../../../Styles/ServicesGrid.css";
import firstIcon from "../../../../Styles/images/sell-my-business.png"; 
import secondIcon from "../../../../Styles/images/become-a-buyer.png";
import thirdIcon from "../../../../Styles/images/get-a-valuation.png";
import fourthIcon from "../../../../Styles/images/loans.png";

const handleRedirect = (route) => {
  window.location.href = route;
};

const ServicesCards = () => {
  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid-item">
          <img src={firstIcon} alt="Sell my Business" className="grid-icon" />
          <h3 className="grid-title">Sell my Business</h3>
          <p className="grid-text">
          With a proven track record of over $3.1 billion in completed transactions and more than 1,000 successful deals, Eterna is your trusted partner in selling your business. We’ll help you secure the most favorable terms while ensuring a smooth and confidential process from start to finish.
          </p>
          <button onClick={() => handleRedirect("/sell-my-business")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={secondIcon} alt="Become a Buyer" className="grid-icon" />
          <h3 className="grid-title">Become a Buyer</h3>
          <p className="grid-text">
          Our expert advisors are here to help you identify the right opportunity and guide you through every step of the acquisition journey. Our goal is to ensure your investment delivers strong long-term value and aligns with your strategic vision.
          </p>
          <button onClick={() => handleRedirect("/become-buyer")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={thirdIcon} alt="Get a Business Valuation" className="grid-icon" />
          <h3 className="grid-title">Get a Business Valuation</h3>
          <p className="grid-text">
          Curious about your business's worth? Eterna’s valuation team delivers in-depth, market-informed assessments tailored to your unique business model no matter the economic climate. Reach out to explore how we can support your next move.
          </p>
          <button onClick={() => handleRedirect("/get-business-valuation")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        <div className="services-grid-item">
          <img src={fourthIcon} alt="Loans" className="grid-icon" />
          <h3 className="grid-title">Financing Solutions</h3>
          <p className="grid-text">
          Unlock the capital you need with Eterna’s trusted lending resources. Whether you're planning an acquisition, expansion, partner buy-out, or refinancing, we’ll help you access funding options tailored to your funeral home or cemetery business goals.
          </p>
          <button onClick={() => handleRedirect("/loans")} className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;

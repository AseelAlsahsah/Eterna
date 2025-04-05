import React from "react";
import "../../../Styles/BusinessGrid.css";
import buyingIcon from "../../../Styles/images/businessLifecycle/business-succession-plan.png"; 
import growthIcon from "../../../Styles/images/businessLifecycle/strategic-pricing-initiative.png";
import valuationIcon from "../../../Styles/images/businessLifecycle/consulting-services.png";
import exitIcon from "../../../Styles/images/businessLifecycle/sell-my-business.png";

const BusinessGrid = () => {
  return (
    <section className="business-grid-section">
      <div className="business-grid-container">
        <div className="business-grid-item">
          <img src={buyingIcon} alt="Buying" className="grid-icon" />
          <h3 className="grid-title">Acquisition</h3>
          <p className="grid-text">
          We begin with a thoughtful and comprehensive analysis of your acquisition goals. By understanding what success means for you, we identify the most aligned opportunities and support you through the entire buying process, from evaluation to closing.
          </p>
        </div>
        <div className="business-grid-item">
          <img src={growthIcon} alt="Growth" className="grid-icon" />
          <h3 className="grid-title">Operational Growth</h3>
          <p className="grid-text">
          Our specialists are passionate about helping your funeral home or cemetery reach its full potential. From strategic planning and workflow optimization to accounting and compliance, we provide the tools and insight to elevate every aspect of your operations.
          </p>
        </div>
        <div className="business-grid-item">
          <img src={valuationIcon} alt="Valuation" className="grid-icon" />
          <h3 className="grid-title">Valuation Services</h3>
          <p className="grid-text">
          Knowing your property’s worth is essential to planning for the future. Our valuation services give you a clear picture of your business’s value factoring in real estate, assets, market conditions, and current trends in the deathcare industry so you can plan with confidence.
          </p>
        </div>
        <div className="business-grid-item">
          <img src={exitIcon} alt="Exit" className="grid-icon" />
          <h3 className="grid-title">Exit Planning</h3>
          <p className="grid-text">
          When it’s time to sell, we walk beside you every step of the way. From identifying qualified buyers to negotiating terms and managing the transition, we ensure your legacy is honored and your goals are met at the highest possible value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrid;

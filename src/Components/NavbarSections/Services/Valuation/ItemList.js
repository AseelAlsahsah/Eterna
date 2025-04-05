import React from "react";
import "../../../../Styles/HardWorkReturn.css"; 
import OrangeArrow from "../../../../Styles/images/bullet-arrow-orange.svg";

const ItemList = () => {
  const points = [
    "In-depth analysis of past, current, and projected sales performance",
    "Market evaluation, including demographic and regional trends",
    "Study of historical death rates specific to your location",
    "Full asset review—critical and non-critical alike",
    "Payroll analysis benchmarked against industry standards",
    "Detailed financial review to project future cash flow",
    "Assessment of inventory and excess land for cemetery businesses",
    "Digital summary report for clarity and easy access"
  ];

  return (
    <section className="hardwork-section">
      <h2 className="hardwork-title">Our Valuation Process Leaves No Stone Unturned</h2>
      <p className="hardwork-paragraph">
      At Eterna, we go beyond surface-level assessments to deliver a deep, data-backed understanding of your business’s true worth and what can be done to enhance it. With unmatched experience in valuing, owning, managing, buying, and selling funeral home and cemetery businesses, our team is uniquely equipped to help you unlock your enterprise’s full potential.
      </p>
      <p>Here’s what our comprehensive valuation includes:</p>
      <ul className="hardwork-list">
        {points.map((point, index) => (
          <li key={index}>
            <img src={OrangeArrow} alt="Arrow" className="hardwork-arrow" />
            {point}
          </li>
        ))}
      </ul>
      <p className="hardwork-paragraph">
      Whether you’re preparing for a sale, merger, or simply planning ahead, Eterna provides the insight and expertise to ensure your decisions are informed, strategic, and aligned with your goals.
      </p>
    </section>
  );
};

export default ItemList;

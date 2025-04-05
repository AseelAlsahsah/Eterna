import React from "react";
import "../../../../Styles/HardWorkReturn.css"; 
import OrangeArrow from "../../../../Styles/images/bullet-arrow-orange.svg";

const ItemList = () => {
  const points = [
    "Strong relationships with national banks familiar with the funeral profession",
    "Deep expertise in funeral business cash flow and market trends",
    "Honest, accurate assessments of your loan eligibility",
    "Experience in underwriting funeral business loans of all sizes"
  ];

  return (
    <section className="hardwork-section">
      <h2 className="hardwork-title">Your Trusted Partner in Business Loans</h2>
      <p className="hardwork-paragraph">
      When you need capital for acquisitions, expansion, partner buy-outs, or refinancing, Eterna is here to help. We leverage our strong relationships with banks that specialize in the funeral industry to secure loans tailored to your needs. From start to finish, we ensure the loan process is seamless, ensuring you get the best terms and the right amount of funding for your vision of growth.
      </p>
      <p>Here’s what you can count on from Eterna:</p>
      <ul className="hardwork-list">
        {points.map((point, index) => (
          <li key={index}>
            <img src={OrangeArrow} alt="Arrow" className="hardwork-arrow" />
            {point}
          </li>
        ))}
      </ul>
      <p>At Eterna, we’re committed to turning your growth ambitions into reality. Trust us to guide you through every step of the loan process.</p>
    </section>
  );
};

export default ItemList;

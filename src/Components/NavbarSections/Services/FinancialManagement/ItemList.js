import React from "react";
import "../../../../Styles/HardWorkReturn.css"; 
import OrangeArrow from "../../../../Styles/images/bullet-arrow-orange.svg";

const ItemList = () => {
  const points = [
    "A dedicated financial management consultant focused exclusively on your firm",
    "Detailed financial reporting with funeral and cemetery industry benchmarking",
    "Accounting practices tailored specifically to the deathcare profession",
    "Custom monthly, quarterly, and annual budget planning",
    "Seamless integration with your point-of-sale (POS) system",
    "Optional on-site training to get your team confident and compliant fast"
  ];

  return (
    <section className="hardwork-section">
      <h2 className="hardwork-title">Confidence Through Clarity</h2>
      <p className="hardwork-paragraph">
      Real-time, accurate financial reporting isn’t just helpful, it’s essential. And it shouldn’t come from just any CPA or bookkeeper. It should come from funeral and cemetery experts who understand your business inside and out. With over $600 million in managed revenue and 145,000+ cases, our team brings the numbers and the knowledge to help you thrive.
      </p>
      <h2 className="hardwork-title">What You Can Expect With Eterna</h2>
      <p className="hardwork-paragraph">
      When you partner with us, you gain access to a team with over 600 years of combined industry experience and a comprehensive suite of accounting and financial services tailored to your unique needs:
      </p>
      <ul className="hardwork-list">
        {points.map((point, index) => (
          <li key={index}>
            <img src={OrangeArrow} alt="Arrow" className="hardwork-arrow" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;

import React from "react";
import "../../../../Styles/HardWorkReturn.css"; 
import OrangeArrow from "../../../../Styles/images/bullet-arrow-orange.svg";

const HardWorkReturn = () => {
  const points = [
    "Maximize the financial value of your business",
    "Protect and preserve the legacy you’ve built",
    "Develop compelling, custom marketing packages that attract serious buyers quickly",
    "Design a sale structure with optimal tax benefits",
    "Minimize business disruptions throughout the process",
    "Maintain full confidentiality through a secure, structured approach",
    "Ensure a smooth experience with clear communication and weekly progress updates",
    "Deliver stronger returns that cover our costs, guaranteed"
  ];

  return (
    <section className="hardwork-section">
      <h2 className="hardwork-title">Maximizing the Return on Your Hard Work</h2>
      <p className="hardwork-paragraph">
      You’ve poured years of dedication into building your funeral home or cemetery into what it is today. We honor that commitment by working just as hard to ensure you receive the full value your business deserves. From initial valuation to final closing, our experienced team is by your side handling every detail with precision, care, and complete confidentiality.
      </p>
      <p>Here’s how Eterna helps you succeed:</p>
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

export default HardWorkReturn;

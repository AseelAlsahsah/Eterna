import React from "react";
import "../../../../Styles/HardWorkReturn.css"; 
import OrangeArrow from "../../../../Styles/images/bullet-arrow-orange.svg";

const ItemList = () => {
  const points = [
    "Conducting in-depth research through interviews, operational reviews, and background analysis to fully understand your business",
    "Building trust and strong relationships with you and your team",
    "Developing initiatives and goals that align with your long-term success",
    "Maintaining open and ongoing communication with your staff",
    "Being available when you need us with quick, responsive support",
    "Following timelines and deliverables established by you",
    "Ensuring complete confidentiality throughout our partnership"
];

  return (
    <section className="hardwork-section">
      <h2 className="hardwork-title">Guiding You to a New Level of Success</h2>
      <p className="hardwork-paragraph">
      No matter where you are in the business lifecycle, we offer a full spectrum of consulting services to support your continued growth. Our proven process includes:
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

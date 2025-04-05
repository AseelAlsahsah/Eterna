import React from "react";
import "../Styles/cardSection.css"; 
import sellMyBusinessIcon from "../Styles/images/sell-my-business.png"; 
// import becomeBuyer from "../Styles/images/become-a-buyer.png";
import valuation from "../Styles/images/get-a-valuation.png";
import loans from "../Styles/images/loans.png"; 
import coachingConsulting from "../Styles/images/coaching-consulting.png";
import accounting from "../Styles/images/accounting.png"; 
// import customerServiceTraining from "../Styles/images/customer-service-training.png"; 
import strategicPlan from "../Styles/images/strategic-plan.png"; 
// import leadershipManagement from "../Styles/images/leadership-management.png"; 
// import customerServiceAnalysis from "../Styles/images/customer-service-analysis.png"; 

const cardData = [
  { id: 1, image: sellMyBusinessIcon, text: "Sell Your Business", url: "/sell-my-business" },
  // { id: 2, image: becomeBuyer, text: "Become a Buyer", url: "/page2" },
  { id: 3, image: valuation, text: "Get a Business Valuation", url: "/valuation-services" },
  { id: 4, image: loans, text: "Secure a Loan", url: "/loans" },
  { id: 5, image: coachingConsulting, text: "Coaching & Consulting", url: "/business-consulting-overview" },
  { id: 6, image: accounting, text: "Accounting & Financial Management", url: "/accounting-financial-management" },
  // { id: 7, image: customerServiceTraining, text: "Customer Service Training", url: "/page7" },
  { id: 8, image: strategicPlan, text: "Strategic Planning", url: "/business-consulting-overview" },
  // { id: 9, image: leadershipManagement, text: "Leadership & Management", url: "/page9" },
  // { id: 10, image: customerServiceAnalysis, text: "Customer Surveys & Sales Analysis", url: "/page10" },
];

const CardSection = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="card-section-container">
      <h1 className="section-description-title">How we can help</h1>
      <p className="section-description">
      At Eterna Funeral Home and Cemetery Consulting, we bring decades of expertise to support funeral home and cemetery professionals at every stage of their business journey. With deep roots in the industry since 1997 and a team boasting over 600 years of combined experience, we’re here to help you succeed—whether you’re focused on growing your current operations, planning for succession, or preparing to sell. Wherever you are in the business life cycle, Eterna is your trusted partner.
      </p>
      <div className="card-section">
        {cardData.map((card) => (
          <div key={card.id} className="card" onClick={() => handleRedirect(card.url)}>
            <img src={card.image} alt={card.text} className="card-icon" />
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

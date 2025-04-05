import React from "react";
import "../../../Styles/Affiliations.css"; 
import affiliationImage1 from "../../../Styles/images/affiliations/cana-logo.jpg";
import affiliationImage2 from "../../../Styles/images/affiliations/eo-logo.jpg";
import affiliationImage3 from "../../../Styles/images/affiliations/fsf-logo.jpg";
import affiliationImage4 from "../../../Styles/images/affiliations/iccfa-logo.jpg";
import affiliationImage5 from "../../../Styles/images/affiliations/nfda-logo.jpg";
import affiliationImage6 from "../../../Styles/images/affiliations/selected-independent-logo.jpg";
import affiliationImage7 from "../../../Styles/images/affiliations/Endorsed-Supplier-logo-2023.jpg";

const Affiliations = () => {
  return (
    <section className="affiliations-section">
      <h2>Affiliations</h2>
      <div className="affiliations-container">
        <img src={affiliationImage1} alt="Affiliation 1" className="affiliation-image" />
        <img src={affiliationImage2} alt="Affiliation 2" className="affiliation-image" />
        <img src={affiliationImage3} alt="Affiliation 3" className="affiliation-image" />
        <img src={affiliationImage4} alt="Affiliation 4" className="affiliation-image" />
        <img src={affiliationImage5} alt="Affiliation 5" className="affiliation-image" />
        <img src={affiliationImage6} alt="Affiliation 6" className="affiliation-image" />
        <img src={affiliationImage7} alt="Affiliation 7" className="affiliation-image" />
      </div>
    </section>
  );
};

export default Affiliations;

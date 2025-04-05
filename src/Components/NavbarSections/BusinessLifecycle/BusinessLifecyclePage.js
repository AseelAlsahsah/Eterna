import React from "react";
import "../../../Styles/BusinessLifecyclePage.css";
import Quote from "./Quote";
import Stages from "./Stages";
import BusinessGrid from "./BusinessGrid";

const BusinessLifecyclePage = () => {
  return (
    <div className="business-lifecycle-container">
        <Quote />
        <Stages />
        <BusinessGrid />
    </div>
  );
};

export default BusinessLifecyclePage;

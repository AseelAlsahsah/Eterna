import React from "react";
import "../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import Vision from "./Vision";
import ServicesCards from "./ServicesCards";

const ServicesOverview = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <Vision />
        <ServicesCards />
    </div>
  );
};

export default ServicesOverview;

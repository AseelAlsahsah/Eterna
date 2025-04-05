import React from "react";
import "../../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import Vision from "./Vision";
import ServicesCards from "./ServicesCards";
import ClientWord from "./ClientWord";

const FuneralHomeMergers = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <Vision />
        <ServicesCards />
        <ClientWord />
    </div>
  );
};

export default FuneralHomeMergers;

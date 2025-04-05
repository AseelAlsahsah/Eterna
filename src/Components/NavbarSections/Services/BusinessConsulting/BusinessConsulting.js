import React from "react";
import "../../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import Vision from "./Vision";
import ClientWord from "./ClientWord";
import ItemList from "./ItemList";
import BusinessServices from "./BusinessServices";

const BusinessConsulting = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <Vision />
        <ItemList />
        <BusinessServices />
        <ClientWord />
    </div>
  );
};

export default BusinessConsulting;

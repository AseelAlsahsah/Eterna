import React from "react";
import "../../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import Vision from "./Vision";
import ClientWord from "./ClientWord";
import HardWorkReturn from "./HardWorkReturn";

const SellMyBusiness = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <Vision />
        <HardWorkReturn />
        <ClientWord />
    </div>
  );
};

export default SellMyBusiness;

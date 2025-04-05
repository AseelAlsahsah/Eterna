import React from "react";
import "../../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import Vision from "./Vision";
import ClientWord from "./ClientWord";
import ItemList from "./ItemList";

const Loans = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <Vision />
        <ItemList />
        <ClientWord />
    </div>
  );
};

export default Loans;

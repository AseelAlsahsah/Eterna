import React from "react";
import "../../../Styles/ServicesOverview.css";
import Quote from "./Quote";
import GetInTouch from "./GetInTouch";

const ContactUs = () => {
  return (
    <div className="services-overview-container">
        <Quote />
        <GetInTouch />
    </div>
  );
};

export default ContactUs;

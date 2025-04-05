import React from "react";
import "../../../Styles/Overview.css";
import Mission from "./OurMission";
// import AboutUs from "./AboutUs";
import OurApproach from "./OurApproach";
import OurValuePromise from "./OurValuePromise";
import Affiliations from "./Affiliations";
import Quote from "./Quote";

const Overview = () => {
  return (
    <div className="overview-container">
        {/* <AboutUs /> */}
        <Quote />
        <Mission />
        <OurApproach />
        <OurValuePromise />
        <Affiliations />
    </div>
  );
};

export default Overview;

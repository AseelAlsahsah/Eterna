import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../Styles/images/logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState({
    about: false,
    whyEterna: false,
    services: false,
    resources: false,
    funeralHomeMergers: false,
    businessConsulting: false
  });

  const [hamburgerOpen, setHamburgerOpen] = useState(false);  // State to handle hamburger toggle

  // Handle hover to toggle dropdown visibility
  const handleHover = (menu, isHovered) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menu]: isHovered
    }));
  };

  // Redirect when submenu items are clicked
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  // Toggle Hamburger Menu
  const handleHamburgerClick = () => {
    setHamburgerOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container" onClick={() => handleRedirect("/")}>
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={handleHamburgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${hamburgerOpen ? "active" : ""}`}>
        {/* About - Dropdown */}
        <div
          className="nav-item" onClick={() => handleRedirect("/overview")} >
          Overview
        </div> 
        {/* <div
          className="nav-item"
          onMouseEnter={() => handleHover("about", true)}
          onMouseLeave={() => handleHover("about", false)}
        > */}
          {/* About */}
          {/* {menuOpen.about && ( */}
            {/* <ul className="dropdown"> */}
              {/* <li onClick={() => handleRedirect("/overview")}>Overview</li> */}
              {/* <li onClick={() => handleRedirect("/our-history")}>Our History</li>
              <li onClick={() => handleRedirect("/our-team")}>Our Team</li> */}
            {/* </ul> */}
          {/* )} */}
        {/* </div>    */}

        {/* Services - Dropdown */}
        <div
          className="nav-item"
          onMouseEnter={() => handleHover("services", true)}
          onMouseLeave={() => handleHover("services", false)}
        >
          Services
          {menuOpen.services && (
            <ul className="dropdown">
              <li onClick={() => handleRedirect("/services-overview")}>Services Overview</li>
              <li
                onMouseEnter={() => handleHover("funeralHomeMergers", true)}
                onMouseLeave={() => handleHover("funeralHomeMergers", false)}
              >
                Funeral Home and Cemetery Mergers and Acquisitions Consulting
                {menuOpen.funeralHomeMergers && (
                  <ul className="sub-dropdown">
                    <li onClick={() => handleRedirect("/funeral-home-ma-overview")}>Funeral Home and Cemetery M&A Overview</li>
                    <li onClick={() => handleRedirect("/sell-my-business")}>Sell My Business</li>
                    <li onClick={() => handleRedirect("/valuation-services")}>Valuation Services</li>
                    <li onClick={() => handleRedirect("/loans")}>Loans</li>
                  </ul>
                )}
              </li>
              <li onClick={() => handleRedirect("/business-consulting-overview")} > Business Consulting </li>
              {/* <li
                onMouseEnter={() => handleHover("businessConsulting", true)}
                onMouseLeave={() => handleHover("businessConsulting", false)}
              >
                Business Consulting */}
                {/* {menuOpen.businessConsulting && ( */}
                  {/* <ul className="sub-dropdown"> */}
                    {/* <li onClick={() => handleRedirect("/business-consulting-overview")}>Business Consulting Overview</li> */}
                    {/* <li onClick={() => handleRedirect("/jcg-academy")}>JCG Academy</li> */}
                  {/* </ul> */}
                {/* )} */}
              {/* </li> */}
              <li onClick={() => handleRedirect("/accounting-financial-management")}>Accounting & Financial Management</li>
              {/* <li onClick={() => handleRedirect("/performance-tracker-x")}>Performance Tracker X</li> */}
            </ul>
          )}
        </div>

        {/* Why Eterna - Dropdown */}
        <div
          className="nav-item"
          onMouseEnter={() => handleHover("whyEterna", true)}
          onMouseLeave={() => handleHover("whyEterna", false)}
        >
          Why Eterna
          {menuOpen.whyEterna && (
            <ul className="dropdown">
              <li onClick={() => handleRedirect("/business-lifecycle")}>Business Lifecycle</li>
            </ul>
          )}
        </div>

        <div className="nav-item" onClick={() => handleRedirect("/contact-us")}>Contact Us</div>
        <div className="nav-space"></div>
        <div className="nav-space"></div>
      </div>
    </nav>
  );
};

export default Navbar;

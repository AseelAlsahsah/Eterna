import React from "react";
import { Routes, Route } from "react-router-dom";  // Import Routes and Route
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import Overview from "./Components/NavbarSections/Overview/OverviewPage";
import Footer from "./Components/Footer";
import BusinessLifecyclePage from "./Components/NavbarSections/BusinessLifecycle/BusinessLifecyclePage";
import ServicesOverview from "./Components/NavbarSections/Services/ServicesOverview";
import FuneralHomeMergers from "./Components/NavbarSections/Services/FuneralHomeMergers/FuneralHomeMergers";
import SellMyBusiness from "./Components/NavbarSections/Services/SellMyBusiness/SellMyBusiness"
import Valuation from "./Components/NavbarSections/Services/Valuation/Valuation";
import Loans from "./Components/NavbarSections/Services/Loans/Loans";
import BusinessConsulting from "./Components/NavbarSections/Services/BusinessConsulting/BusinessConsulting";
import FinancialManagement from "./Components/NavbarSections/Services/FinancialManagement/FinancialManagement";
import ContactUs from "./Components/NavbarSections/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/business-lifecycle" element={<BusinessLifecyclePage />}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/services-overview" element= {<ServicesOverview />} />
        <Route path="/funeral-home-ma-overview" element= {<FuneralHomeMergers />} />
        <Route path="/sell-my-business" element= {<SellMyBusiness />} />
        <Route path="/valuation-services" element= {<Valuation />} />
        <Route path="/loans" element= {<Loans />} />
        <Route path="/business-consulting-overview" element= {<BusinessConsulting />} />
        <Route path="/accounting-financial-management" element= {<FinancialManagement />} />
        <Route path="/contact-us" element= {<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

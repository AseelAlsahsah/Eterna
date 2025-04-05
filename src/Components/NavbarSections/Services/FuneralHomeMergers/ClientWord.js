import React from "react";
import "../../../../Styles/ClientWord.css"; 
import WordIcon from "../../../../Styles/images/quote.svg";

const ClientWord = () => {
  return (
    <section className="word-section">
      <img src={WordIcon} alt="Icon" className="word-icon" />
      <h2 className="word-title">A word from our clients</h2>
      <p className="word-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="author">– Client Name </p>
    </section>
  );
};

export default ClientWord;

import React from "react";
import "../../../../Styles/ClientWord.css"; 
import WordIcon from "../../../../Styles/images/quote.svg";

const ClientWord = () => {
  return (
    <section className="word-section">
      <img src={WordIcon} alt="Icon" className="word-icon" />
      <h2 className="word-title">A word from our clients</h2>
      <p className="word-text">
      As a buyer, it has always been a comfortable situation to work with Johnson Consulting Group because of their strong foundation of honesty. Working with David Adams on the last sale was a pleasure.  David took the work out of the sale for me and did an excellent job of communicating, solving problems, and achieving results far in excess of what I could have achieved.   As I continue to work towards my retirement, you can be assured I will be trusting David Adams at Johnson Consulting Group to represent me.
      </p>
      <p className="author">– Jim Larkin </p>
    </section>
  );
};

export default ClientWord;

import React, { useState } from "react";
import "./homeAccordion.css";

const HomeAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p className="heading-p" onClick={() => setShow(!show)}>
          <span className="left-icon">{show ? "-" : "+"}</span>
          <span>{question}</span>
        </p>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
};
export default HomeAccordion;

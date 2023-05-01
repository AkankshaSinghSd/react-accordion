import React, { useState } from "react";
import { questions } from "../Components/api";
import "./homeAccordion.css";
import HomeAccordion from "./homeAccordion";

const MyAccordion = () => {
  const [data, sData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1 className="heading">React Question Answer</h1>
        {data.map((curVal) => {
          const { id } = curVal;
          return <HomeAccordion key={id} {...curVal} />;
        })}
      </section>
    </>
  );
};
export default MyAccordion;

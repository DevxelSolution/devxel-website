import React from "react";
import "../styles/heading.css";

const Heading = ({ start, end }) => {
  return (
    <div>
      <h2 className="title mx-auto flex justify-center text-4xl md:text-5xl mt-10">
        {start} &nbsp;<span>{end}</span>
      </h2>
    </div>
  );
};

export default Heading;

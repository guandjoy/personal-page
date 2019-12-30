import React from "react";
import Rudl from "./Rudl";
import Primitivo from "./Primitivo";

function Portfolio(props) {
  return (
    <div className="o-portfolio__wrapper">
      <Rudl />
      <Primitivo />
      <h2>Redfish</h2>
    </div>
  );
}

export default Portfolio;

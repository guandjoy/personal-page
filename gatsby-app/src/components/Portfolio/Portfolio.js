import React from "react";
import Rudl from "./Rudl";
import Primitivo from "./Primitivo";
import Redfish from "./Redfish";

function Portfolio(props) {
  return (
    <div className="o-portfolio__wrapper">
      <Rudl />
      <Primitivo />
      <Redfish />
    </div>
  );
}

export default Portfolio;

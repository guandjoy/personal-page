import React from "react";
import ItemIframeImage from "./ItemIframeImage";

function Redfish({}) {
  return (
    <div className="o-portfolio__item">
      <h2>Redfish</h2>
      <ItemIframeImage
        title="Redfish"
        src="https://redfish-project.gq/"
        size="one"
      />
    </div>
  );
}

export default Redfish;

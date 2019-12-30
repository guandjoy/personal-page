import React from "react";
import ItemIframeImage from "./ItemIframeImage";

function Primitivo({}) {
  return (
    <div className="o-portfolio__item">
      <h2>Primitivo</h2>
      <div className="o-portfolio__images">
        <ItemIframeImage
          title="redfish-coming-soon"
          src="https://redfish-coming-soon.netlify.com/"
          size="three"
        />
        <ItemIframeImage
          title="blobby-spinner"
          src="https://blobby-spinner.netlify.com/"
          size="three"
        />
        <ItemIframeImage
          title="phased-transition"
          src="https://phased-transition.netlify.com/"
          size="three"
        />
        <ItemIframeImage
          title="noise-of-distance"
          src="https://noise-of-distance.netlify.com/"
          size="three"
        />
        <ItemIframeImage
          title="smart-round"
          src="https://smart-round.netlify.com/"
          size="three"
        />
        <ItemIframeImage
          title="sequence-of-polygons"
          src="https://sequence-of-polygons.netlify.com/"
          size="three"
        />
      </div>
    </div>
  );
}

export default Primitivo;

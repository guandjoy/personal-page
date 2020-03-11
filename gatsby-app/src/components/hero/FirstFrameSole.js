import React from "react";

function FirstFrameSole({ setSoleIsLoaded }) {
  return (
    <img
      src="https://yurko-personal-page.s3.eu-central-1.amazonaws.com/FirstFrame.jpg"
      className="m-video__first-frame-sole"
      onLoad={() => setSoleIsLoaded(true)}
    />
  );
}

export default FirstFrameSole;

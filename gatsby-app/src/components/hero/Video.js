import React, { useEffect } from "react";
import { isMobileOnly } from "react-device-detect";

function Video() {
  useEffect(() => {
    document.getElementById("hero-video").play();
  }, []);

  // Lossy video for mobile only devices
  const sourcePath = isMobileOnly
    ? "https://yurko-personal-page.s3.eu-central-1.amazonaws.com/HeroVideo-FullHD-1-bitrate.mp4"
    : "https://yurko-personal-page.s3.eu-central-1.amazonaws.com/HeroVideo-FullHD-4-bitrate.mp4";

  return (
    <video autoPlay muted loop id="hero-video">
      <source src={sourcePath} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}

export default Video;

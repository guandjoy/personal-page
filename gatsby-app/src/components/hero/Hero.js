import React, { useState, useEffect, useCallback } from "react";
import SocialButtons from "./SocialButtons/SocialButtons";
import Video from "./Video";
import Logo from "./Logo";
import ListeningStatus from "./ListeningStatus/ListeningStatus";
import FirstFrameSole from "./FirstFrameSole";
// Styles
import "./Hero.css";

function Hero() {
  const [videoIsReady, setVideoIsReady] = useState(false);
  const [soleIsLoaded, setSoleIsLoaded] = useState(false);
  const [heroIsLoaded, setHeroIsLoaded] = useState(false);
  return (
    <div
      style={{ opacity: heroIsLoaded ? "1" : "0" }}
      className="o-hero"
      onLoad={() => setHeroIsLoaded(true)}
    >
      <div className="m-elements">
        <Logo />
        <h1 className="m-elements__header">Is There Web On Mars?</h1>
        <h2 className="m-elements__subheader">
          Take my stream with 26.8 min latency.
        </h2>
        <SocialButtons />
      </div>
      <div className="m-video__wrapper">
        <Video setVideoIsReady={setVideoIsReady} />
        <FirstFrameSole setSoleIsLoaded={setSoleIsLoaded} />
        <ListeningStatus />
      </div>
    </div>
  );
}

export default Hero;

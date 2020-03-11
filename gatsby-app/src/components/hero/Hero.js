import React, { useState, useEffect, useReducer } from "react";
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
  useEffect(() => console.log("video", videoIsReady), [videoIsReady]);
  useEffect(() => console.log("sole", soleIsLoaded), [soleIsLoaded]);
  return (
    <div style={{ opacity: soleIsLoaded ? "1" : "0" }} className="o-hero">
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

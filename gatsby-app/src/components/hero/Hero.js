import React from "react";
import SocialButtons from "./SocialButtons/SocialButtons";
import Video from "./Video";
import Logo from "./Logo";
import ListeningStatus from "./ListeningStatus/ListeningStatus";
// Styles
import "./Hero.css";

function Hero() {
  return (
    <div className="o-hero">
      <div className="m-elements">
        <Logo />
        <h1 className="m-elements__header">Is There Web On Mars?</h1>
        <h2 className="m-elements__subheader">
          Take my stream with 26.8 min latency.
        </h2>
        <SocialButtons />
      </div>
      <div className="m-video__wrapper">
        <Video />
        <ListeningStatus />
      </div>
    </div>
  );
}

export default Hero;

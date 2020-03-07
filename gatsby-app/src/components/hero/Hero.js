import React from "react";
import SocialButtons from "./SocialButtons/SocialButtons";
import Video from "./Video";
import Logo from "./Logo";
// Styles
import "./Hero.css";

function Hero() {
  return (
    <div className="o-hero__wrapper">
      <div className="a-video__wrapper">
        <Logo />
        <h1 style={{ margin: "0" }}>Is There Web On Mars?</h1>
        <h2>Take my stream with 26.8 min latency.</h2>
        <SocialButtons />
        <Video />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import SocialButtons from "./SocialButtons/SocialButtons";
// Styles
import "./Hero.css";

function Hero() {
  return (
    <div className="o-hero__wrapper">
      <h1 style={{ margin: "0" }}>Yurko Turskiy</h1>
      <h2>Developer and Designer from Kyiv</h2>
      <SocialButtons />
    </div>
  );
}

export default Hero;

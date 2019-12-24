import React from "react";
import TwitterIcon from "../../../images/TwitterIcon";
import GitHubIcon from "../../../images/GitHubIcon";
import InstagramIcon from "../../../images/InstagramIcon";
import LinkedInIcon from "../../../images/LinkedInIcon";
import FbIcon from "../../../images/FbIcon";
// styles
import "./SocialButtons.css";

function SocialButtons() {
  return (
    <div className="social-buttons__wrapper">
      <TwitterIcon className="social-buttons__item" />
      <GitHubIcon className="social-buttons__item" />
      <InstagramIcon className="social-buttons__item" />
      {/* <LinkedInIcon className="social-buttons__item" /> */}
      <FbIcon id="fb-icon" className="social-buttons__item" />
    </div>
  );
}

export default SocialButtons;

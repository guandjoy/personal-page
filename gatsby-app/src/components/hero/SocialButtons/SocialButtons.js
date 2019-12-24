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
      <a href="https://twitter.com/guandjoy">
        <TwitterIcon className="social-buttons__item" />
      </a>
      <a href="https://github.com/guandjoy">
        <GitHubIcon className="social-buttons__item" />
      </a>

      <a href="https://www.instagram.com/yurko.turskiy/">
        <InstagramIcon className="social-buttons__item" />
      </a>
      {/* <a href="https://www.linkedin.com/in/yurko-turkiy">
        <LinkedInIcon className="social-buttons__item" />
      </a> */}
      <a href="https://www.facebook.com/guandjoy">
        <FbIcon id="fb-icon" className="social-buttons__item" />
      </a>
    </div>
  );
}

export default SocialButtons;

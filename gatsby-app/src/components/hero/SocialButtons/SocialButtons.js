import React from "react";
import Icon from "./Icon";
// Social SVG Icons
import TwitterIcon from "../../../images/icons/TwitterIcon";
import GitHubIcon from "../../../images/icons/GitHubIcon";
import InstagramIcon from "../../../images/icons/InstagramIcon";
import LinkedInIcon from "../../../images/icons/LinkedInIcon";
import FbIcon from "../../../images/icons/FbIcon";
import RedditIcon from "../../../images/icons/RedditIcon";
// Styles
import "./SocialButtons.css";

function SocialButtons() {
  return (
    <div className="social-buttons__wrapper">
      <Icon Component={TwitterIcon} url="https://twitter.com/guandjoy/" />
      <Icon Component={GitHubIcon} url="https://github.com/guandjoy" />
      <Icon
        Component={InstagramIcon}
        url="https://instagram.com/yurko.turskiy/"
      />
      <Icon
        Component={FbIcon}
        id="fb-icon"
        url="https://facebook.com/guandjoy/"
      />
      <Icon Component={RedditIcon} url="https://reddit.com/user/Yurko_III/" />
    </div>
  );
}

export default SocialButtons;

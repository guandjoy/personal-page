import React from "react";
import Logo from "./Logo";

function Header({}) {
  return (
    <header className="header">
      <Logo />
      <div className="right-column">
        <h6 className="name">Yurko Turskiy</h6>
        <h1 className="title">Developer & Designer</h1>
        <div className="social-media">
          <a href="https://twitter.com/guandjoy">Twitter</a>
          <a href="https://github.com/guandjoy">GitHub</a>
          <a href="https://www.instagram.com/yurko.turskiy/">Instagram</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

import "../components/styles.css";

import SEO from "../components/seo";
import Logo from "../components/Logo";

const IndexPage = () => (
  <div>
    <SEO
      title="Yurko Turskiy"
      keywords={[`designer`, `developer`, `programmer`, `frontend`]}
    />
    <header className="header">
      <Logo />
      <div className="right-column">
        <h6 className="name">Yurko Turskiy</h6>
        <h1 className="title">Designer & Developer</h1>
        <div className="social-media">
          <a href="https://mobile.twitter.com/guandjoy" target="_blank">
            Twitter
          </a>
          <a href="https://github.com/guandjoy" target="_blank">
            GitHub
          </a>
          <a href="https://dribbble.com/Guandjoy" target="_blank">
            Dribbble
          </a>
        </div>
      </div>
    </header>
    <div className="content">
      <div className="projects">
        <div className="project">
          <h5 className="rep-name">Redfish</h5>
          <p className="description">Boilerplate web application</p>
        </div>
        <div className="project">
          <h5 className="rep-name">React-universal-dnd-layout</h5>
          <p className="description">
            Drag and drop for whatever layout you want.
          </p>
        </div>
        <div className="project">
          <h5 className="rep-name">React-SVG-shape-transition</h5>
          <p className="description">
            Seamless transition with cool svg effects
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;

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
        <h1 className="title">Developer & Designer</h1>
        <div className="social-media">
          <a href="https://twitter.com/guandjoy">Twitter</a>
          <a href="https://github.com/guandjoy">GitHub</a>
          <a href="https://www.instagram.com/yurko.turskiy/">Instagram</a>
        </div>
      </div>
    </header>
    <div className="content">
      <div className="projects">
        <div className="project">
          <a href="https://github.com/guandjoy/primitivo-svg">
            <h5 className="rep-name">Primitivo-SVG</h5>
          </a>
          <p className="description">SVG library. Create and morph paths.</p>
        </div>
        <div className="project">
          <a href="https://github.com/guandjoy/redfish">
            <h5 className="rep-name">Redfish</h5>
          </a>
          <p className="description">Boilerplate web application</p>
        </div>
        <div className="project">
          <a href="https://github.com/guandjoy/react-universal-dnd-layout">
            <h5 className="rep-name">React-universal-dnd-layout</h5>
          </a>
          <p className="description">Drag and drop layout</p>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;

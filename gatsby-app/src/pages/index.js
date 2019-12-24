import React from "react";

import "../components/styles.css";

import SEO from "../components/seo";
import Header from "../components/Header";

const IndexPage = () => (
  <div>
    <SEO title="Yurko Turskiy" />
    <Header />
    <div className="content">
      <div className="projects">
        <div className="project">
          <h5 className="rep-name">
            <a href="https://github.com/guandjoy/primitivo-svg">
              Primitivo-SVG
            </a>
          </h5>
          <p className="description">SVG library. Create and morph paths.</p>
        </div>
        <div className="project">
          <h5 className="rep-name">
            <a href="https://github.com/guandjoy/redfish">Redfish</a>
          </h5>
          <p className="description">Boilerplate web application</p>
        </div>
        <div className="project">
          <h5 className="rep-name">
            <a href="https://github.com/guandjoy/react-universal-dnd-layout">
              React-universal-dnd-layout
            </a>
          </h5>
          <p className="description">Drag and drop layout</p>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;

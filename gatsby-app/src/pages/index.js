import React from "react";
import { css } from "linaria";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Logo from "../components/Logo";

const header = css`
  display: inline-block;
  vertical-align: top;
`;

const content = css`
  display: inline-block;

  .title {
    padding: 0 0 0 12px;
    margin: 28px 0 0 0;
    font-size: 2rem;
    font-weight: 100;
    color: #444444;
  }

  .social-media {
    margin-top: 24px;
  }

  h6 {
    font-size: 1rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
  .projects {
    margin-top: 24px;
  }

  hr {
    align: left;
    width: 50px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    padding: 0px;
    display: inline-block;
  }

  a {
    text-decoration: none;
    padding: 12px;
    color: #444444;
    font-weight: 700;
  }

  a:hover {
    background-color: #f7f6fa;
    border-radius: 8px;
  }
`;

const projects = css`
  margin: 64px 0 0 0;
`;

const project = css`
  margin: 12px 0 12px 0;
  padding: 12px;
  height: 64px;
  border: 1px solid #ececec;
  border-radius: 8px;

  .name {
    margin: 0;
    font-size: 1rem;
  }
`;

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className={header}>
      <Logo />
    </header>
    <div className={content}>
      <h1 className="title">Digital Product Designer & Developer</h1>
      <ul className="social-media">
        <li>
          <a href="https://mobile.twitter.com/guandjoy" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/guandjoy" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/Guandjoy" target="_blank">
            Dribbble
          </a>
        </li>
      </ul>
      <div className={projects}>
        <div className={project}>
          <h5 className="name">Redfish</h5>
          <p className="description">Boilerplate web application</p>
        </div>
        <div className={project}>
          <h5 className="name">React-universal-dnd-layout</h5>
          <p className="description">Coming soon</p>
        </div>
        <div className={project}>
          <h5 className="name">SVG shape transition</h5>
          <p className="description">Coming soon</p>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;

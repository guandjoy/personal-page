import React from "react";
import "../components/styles.css";
import "../components/Portfolio/Portfolio.css";

import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

const IndexPage = () => (
  <div>
    <SEO title="Yurko Turskiy" />
    <Header />
    <Hero />
    <Portfolio />
  </div>
);

export default IndexPage;

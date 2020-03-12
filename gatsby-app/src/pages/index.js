import React from "react";
import "../components/styles.css";
import "../components/Portfolio/Portfolio.css";

import SEO from "../components/seo";
import Hero from "../components/hero/Hero";

const IndexPage = () => (
  <div>
    <SEO title="Yurko's Homepage" />
    <Hero />
  </div>
);

export default IndexPage;

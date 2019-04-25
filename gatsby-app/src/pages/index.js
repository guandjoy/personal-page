import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { css, cx } from "linaria"

const header = css`
  color: #414141;
  position: absolute;
  left: 260px;
  top: 260px;
`

const hero = css`
  width: 100%;
  height: 80vh;
  background-color: #F0F0F0;
`

const section = css`
  width: 100%;
  height: 80vh;

  .title {
    color: white;
  }
`

const aboutMe = css`
  background-color: lightgrey;
`

const getInTouch = css`
  background-color: #100925;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={hero}>
      <h1 className={header}>Hi people</h1>
    </div>
    <div className={cx(section, aboutMe)}>
      <h3>About me</h3>
      <p>I'm a designer and programmer</p>
    </div>
    <div className={section}>
      <div>
        <a href="https://dribbble.com/Guandjoy" target="_blank">Dribbble</a>
        <p>Here I post shots of what I'm doing</p>
      </div>
      <div>
        <a href="https://twitter.com/guandjoy" target="_blank">Twitter</a>
        <p>The place where I try to be on edge</p>
      </div>
      <div>
        <a href="https://github.com/guandjoy" target="_blank">GitHub</a>
        <p>The place with sources. If you want to dive deeper and look under the hood</p>
      </div>
    </div>
    <div className={cx(section, getInTouch)}>
      <h3 className="title">Get in touch</h3>
    </div>
  </Layout>
)

export default IndexPage

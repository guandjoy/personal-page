import { Link } from "gatsby"
import { css } from "linaria"
import PropTypes from "prop-types"
import React from "react"

const logo = css`
  width: 64px;
  height: 64px;
  border-radius: 1px;
  background: url(../images/logo.svg);
  background-size: 42px 42px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #FDFDFD;
  position: absolute;
  top: 24px;
  left: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`

const Header = ({ siteTitle }) => (
  <header>
    <a href="/" className={logo} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header>
    <a 
      href="/"
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "1px",
        background: `url(${logo})`,
        backgroundSize: "42px 42px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#fafafa',
        position: 'absolute',
        top: '24px',
        left: '32px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

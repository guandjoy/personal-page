import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

import { css } from "linaria"; // eslint-disable-line

export const globals = css`
  :global() {
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap");
    body {
      font-family: "Roboto", sans-serif;
      margin: 0;
      padding: 0;
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

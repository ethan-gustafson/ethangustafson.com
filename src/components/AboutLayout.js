/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/Header.js";
import StyledAboutMain from "./main/styles/StyledAboutMain.js";
import "../css/layout.css";

const AboutLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AboutSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledAboutMain>{children}</StyledAboutMain>
    </>
  );
};

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutLayout;
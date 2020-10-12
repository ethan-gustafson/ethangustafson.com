import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav.js";
import { StyledHeader } from './styles/StyledHeader.js';

const Header = ({ siteTitle }) => (
  <StyledHeader id="header">
    <Nav/>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import React from "react";
import { Navigation, Ul, Li, Link, Logo } from './styles/StyledNav.js';

const Nav = () => (
  <Navigation>
    <Logo to="/">EG</Logo>
    <Ul>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="#portfolio">Portfolio</Link></Li>
      <Li><Link to="#blog">Blog</Link></Li>
      <Li><Link to="#film-video">Film/Photo</Link></Li>
      <Li><Link to="#contact">Contact</Link></Li>
    </Ul>
  </Navigation>
);

export default Nav;
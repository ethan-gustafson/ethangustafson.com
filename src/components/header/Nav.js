import React from "react";
import { Navigation, Ul, Li, Link } from './styles/StyledNav.js';

const Nav = () => (
  <Navigation>
    <Ul>
      <Li><Link to="/">EG</Link></Li>
    </Ul>
  </Navigation>
);

export default Nav;
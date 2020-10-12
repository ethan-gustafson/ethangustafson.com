import React from "react";
import { UlContainer, Ul, Li, Link } from './styles/StyledNav.js';

const Nav = () => (
  <UlContainer>
    <Ul>
      <Li><Link to="/">EG</Link></Li>
    </Ul>
  </UlContainer>
);

export default Nav;
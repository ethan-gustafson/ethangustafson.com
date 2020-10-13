import React from 'react';
import { F } from "./StyledFooter";

const Footer = () => (
  <div>
    <F>
      © {new Date().getFullYear()}, Built with <a style={{color: "#ef233c"}} href="https://www.gatsbyjs.com"> Gatsby</a>
    </F>
  </div>
)

export default Footer;
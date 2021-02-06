import React from 'react';
import { F } from "./StyledFooter";

const Footer = () => (
  <div>
    <F>
      © {new Date().getFullYear()}, Built with <a style={{color: "#e2c989"}} href="https://www.gatsbyjs.com"> Gatsby</a>
    </F>
  </div>
)

export default Footer;
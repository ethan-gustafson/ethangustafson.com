import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Navigation, Ul, Li, Link, LiLogo, LogoLink } from './styles/StyledNav.js';

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icons/EthanGustafsonLogo_white.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Navigation>
      <Ul>
        <LiLogo>
          <LogoLink to="/">
            <Img imgStyle={{objectFit: "contain"}} fluid={data.logo.childImageSharp.fluid} />
          </LogoLink>
        </LiLogo>
        <Li><Link to="/about">About</Link></Li>
        <Li><Link to="/#portfolio">Portfolio</Link></Li>
        <Li><Link to="/#blog">Blog</Link></Li>
        <Li><Link to="/film-photo">Film/Photo</Link></Li>
        <Li><Link to="/#contact">Contact</Link></Li>
      </Ul>
    </Navigation>
  )
};

export default Nav;
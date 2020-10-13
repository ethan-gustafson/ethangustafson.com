import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';

export const IntroBackgroundImage = ({ children }) => (
<StaticQuery
    query={graphql`
      query {
        intro: file(relativePath: { eq: "intro/clearwater_sunset.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <BackgroundImage fluid={data.intro.childImageSharp.fluid} 
          title="Fullscreen Background" id="fullscreenbg" role="img" 
          aria-label="Fullscreen Background" tag="div"
          style={{
          width: "100%", 
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}>
          {children}
        </BackgroundImage>
      )
    }}
  />
);
import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import About from "../About.js"

const AboutImageQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      ethan: file(relativePath: { eq: "ethan.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <About photo={data}/>
  )
}

export default AboutImageQuery;
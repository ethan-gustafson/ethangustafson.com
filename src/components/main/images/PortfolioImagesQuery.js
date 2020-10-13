import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Portfolio from "../Portfolio.js"

const PortfolioImages = () => {
  const data = useStaticQuery(graphql`
    query {
      cli: file(relativePath: { eq: "CLI/one_piece.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sinatra: file(relativePath: { eq: "Sinatra/Logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rails: file(relativePath: { eq: "CLI/one_piece.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: { eq: "CLI/one_piece.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "CLI/one_piece.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Portfolio project={data}/>
  )
}

export default PortfolioImages;
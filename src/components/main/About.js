import { Link } from "gatsby";
import React from "react";
import { Section, AboutH2, MainContainer, ImgContainer, AboutImage, InfoContainer, P } from "./styles/StyledAbout.js";

const About = props => (
  <Section>
    <AboutH2>About</AboutH2>
    <MainContainer>

      <ImgContainer>
        <AboutImage fluid={props.photo.ethan.childImageSharp.fluid}/>
      </ImgContainer>

      <InfoContainer>
        <P>I discovered a passion for programming through storytelling, where I was able to combine a creative, technical, and psychological mindset creating experiences for audiences. When I’m not programming, I’m learning, connecting with many of various backgrounds, and problem-solving.</P>
        <P>Check out the film/photo page to view my previous work in wedding videography, documentaries, as well as miscellaneous film production and photography!</P>
        <P>Want to connect? Send me a <Link style={{color: "#e2c989"}} to="/#contact">message!</Link></P>
      </InfoContainer>

    </MainContainer>
  </Section>
);

export default About;
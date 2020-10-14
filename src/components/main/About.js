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
        <P>I am a Software Engineer based in Daytona Beach, Florida. Originally I'm from Southern California and moved to Orlando in 2014.</P>
        <P>Currently, I am transitioning a technical and creative background in filmmaking to the field of web development. My former work required a highly complex and diverse skill set, including the mastery of high-end software editing platforms, hardware tools, client-facing customer service, and project management.</P>
        <P>Want to connect? Send me a <Link style={{color: "#ef233c"}} to="/#contact">message!</Link></P>
      </InfoContainer>

    </MainContainer>
  </Section>
);

export default About;
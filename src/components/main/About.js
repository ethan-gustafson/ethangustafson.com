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
        <P>Software Engineer based in Daytona Beach, Florida.</P>
        <P>I am transitioning a technical and creative background in filmmaking to the field of web development. My former work required a highly complex and diverse skill set, including the mastery of high-end software editing platforms, hardware tools, client-facing customer service, and project management. Working with Rails and React is a natural step in my career path.</P>
      </InfoContainer>

    </MainContainer>
  </Section>
);

export default About;
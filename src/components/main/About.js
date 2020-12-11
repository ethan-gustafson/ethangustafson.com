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
        <P>I am a Software Engineer based in Daytona Beach, Florida. </P>
        <P>Currently, I am looking for a position that is remote or based in the Greater Orlando Area. I love anime, gaming, filmmaking, and photography!</P>
        <P>Want to connect? Send me a <Link style={{color: "#ef233c"}} to="/#contact">message!</Link></P>
      </InfoContainer>

    </MainContainer>
  </Section>
);

export default About;
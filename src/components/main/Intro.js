import React from 'react';
import { Section, TextContainer, Name, Career, P, PortfolioLink } from "./styles/StyledIntro.js";
import { IntroBackgroundImage } from "./images/IntroBackgroundImage.js";
import Footer from '../footer/Footer.js';

const Intro = () => (
  <Section>
    <IntroBackgroundImage>
      <TextContainer>
        <Name>Ethan Gustafson</Name>
        <Career>Software Engineer</Career>
        <P>
          <PortfolioLink to="/#portfolio">View My Work</PortfolioLink>
        </P>
      </TextContainer>
    </IntroBackgroundImage>
    <Footer/>
  </Section>
)

export default Intro;
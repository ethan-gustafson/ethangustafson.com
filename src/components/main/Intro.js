import React from 'react';
import { Section, TextContainer, Name, Career, P, PortfolioLink } from "./styles/StyledIntro.js";
import { IntroBackgroundImage } from "./images/IntroBackgroundImage.js";

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
  </Section>
)

export default Intro;
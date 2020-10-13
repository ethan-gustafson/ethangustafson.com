import React from 'react';
import { Section, TextContainer } from "./styles/StyledIntro.js";
import { IntroBackgroundImage } from "./images/IntroBackgroundImage.js";

const Intro = () => (
  <Section>
    <IntroBackgroundImage>
      <TextContainer>
        <h1 style={{fontSize: "70px", textShadow: "0 0 3px lightgrey"}}>Ethan Gustafson</h1>
        <h2 style={{fontSize: "50px"}}>Software Engineer</h2>
      </TextContainer>
    </IntroBackgroundImage>
  </Section>
)

export default Intro;
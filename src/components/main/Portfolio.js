import React from 'react';
import { Link } from 'gatsby';
import { 
  Section, 
  PortfolioH2, 
  ProjectsContainer,
  Project,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Tools,
  Info
} from "./styles/StyledPortfolio.js";


const Portfolio = props => (
  <Section id="portfolio">
    <PortfolioH2>Portfolio</PortfolioH2>
    <ProjectsContainer>
      <Project>

        <ImgContainer>
          <Link to="https://github.com/GoodGuyGuf/One_Piece">
            <Image fluid={props.project.cli.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>One Piece</Title>
          <Tools>Tools: Ruby, NokoGiri, RSpec</Tools>
          <Info>A Ruby Command Line Interface providing information about the anime <i>One Piece</i>.</Info>
        </InfoContainer>

      </Project>
      <Project></Project>
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </ProjectsContainer>
  </Section>
);

export default Portfolio;
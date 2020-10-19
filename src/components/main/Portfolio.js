import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import { 
  Section, 
  PortfolioH2, 
  ProjectsContainer,
  Project,
  ImgContainer,
  InfoContainer,
  Title,
  Tools,
  Info
} from "./styles/StyledPortfolio.js";


const Portfolio = props => (
  <Section>
    <div id="portfolio" style={{position: "relative", top: "-100px"}}></div>
    <PortfolioH2>Portfolio</PortfolioH2>
    <ProjectsContainer>
      <Project>

        <ImgContainer>
          <Link target="_blank" to="https://github.com/GoodGuyGuf/One_Piece">
            <Img fluid={props.project.cli.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>One Piece | <Link style={{color: "#ef233c"}} target="_blank" to="https://repl.it/@GoodGuyGuf/OnePiece">Repl.it</Link></Title>
          <Tools><u>Tools:</u> Ruby, NokoGiri, RSpec</Tools>
          <Info>A Ruby Command Line Interface providing information about the anime <i>One Piece</i>.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link target="_blank" to="https://github.com/GoodGuyGuf/hole-in-the-wall">
            <Img fluid={props.project.sinatra.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>Hole in the Wall | <Link style={{color: "#ef233c"}} target="_blank" to="https://hole--in-the--wall.herokuapp.com/login">Heroku Live</Link></Title>
          <Tools><u>Tools:</u> Sinatra, JavaScript, Postgres, faker</Tools>
          <Info>A web application for providing awareness towards "Hole in the wall" types of stores.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link target="_blank" to="https://github.com/GoodGuyGuf/FilmPitch">
            <Img fluid={props.project.rails.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>FilmPitch</Title>
          <Tools><u>Tools:</u> Rails, RSpec/Capybara, ActiveStorage, Devise, Omniauth-Twitter</Tools>
          <Info>Film Crowdfunding Application allowing users to donate to listed projects.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link target="_blank" to="https://github.com/GoodGuyGuf/myBudget">
            <Img fluid={props.project.js.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>MyBudget</Title>
          <Tools><u>Tools:</u> JavaScript, Rails API</Tools>
          <Info>Simple Budgeting Application allowing users to formulate simple budgets with expenses.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link target="_blank" to="https://github.com/GoodGuyGuf/vacationMe-frontend">
            <Img fluid={props.project.react.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>VacationMe</Title>
          <Tools><u>Tools:</u> React, Redux, Apollo, ActiveStorage, Rails API w/Graphql</Tools>
          <Info>Social Media Application permitting users to upload pictures and information for their vacations.</Info>
        </InfoContainer>

      </Project>
    </ProjectsContainer>
  </Section>
);

export default Portfolio;
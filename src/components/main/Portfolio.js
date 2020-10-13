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
          <Title>One Piece | <Link to="https://repl.it/@GoodGuyGuf/OnePiece">Repl.it</Link></Title>
          <Tools><u>Tools:</u> Ruby, NokoGiri, RSpec</Tools>
          <Info>A Ruby Command Line Interface providing information about the anime <i>One Piece</i>.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link to="https://github.com/GoodGuyGuf/hole-in-the-wall">
            <Image fluid={props.project.sinatra.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>Hole in the wall | <Link to="https://hole--in-the--wall.herokuapp.com/login">Heroku Live</Link></Title>
          <Tools><u>Tools:</u> Sinatra, JavaScript, Postgres, faker</Tools>
          <Info>A web application for providing awareness towards "Hole in the wall" types of stores.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link to="https://github.com/GoodGuyGuf/FilmPitch">
            <Image fluid={props.project.rails.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>FilmPitch</Title>
          <Tools><u>Tools:</u> Rails, RSpec/Capybara, ActiveStorage, Devise, Omniauth-Twitter</Tools>
          <Info>Film Crowdfunding Application.</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link to="https://github.com/GoodGuyGuf/myBudget">
            <Image fluid={props.project.js.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>MyBudget</Title>
          <Tools><u>Tools:</u> JavaScript, Rails API</Tools>
          <Info>Simple Budgeting Application</Info>
        </InfoContainer>

      </Project>
      <Project>

        <ImgContainer>
          <Link to="https://github.com/GoodGuyGuf/vacationMe-frontend">
            <Image fluid={props.project.react.childImageSharp.fluid} />
          </Link>
        </ImgContainer>

        <InfoContainer>
          <Title>VacationMe</Title>
          <Tools><u>Tools:</u> React, Redux, Apollo, ActiveStorage, Rails API w/Graphql</Tools>
          <Info>Social Media Application.</Info>
        </InfoContainer>

      </Project>
    </ProjectsContainer>
  </Section>
);

export default Portfolio;
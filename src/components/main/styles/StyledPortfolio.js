import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

export const Section = styled.section`
  width: 100%;
  height: 1300px;

  background-color: #08090F;
  margin-bottom: 1%;
`

export const PortfolioH2 = styled.h2`
  padding-top: 3%;
  padding-bottom: 2%;
  font-size: 50px;
  color: white;
  text-align: center;
`

export const ProjectsContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 550px);
`

export const Project = styled.div`
  width: 85%;
  height: 500px;

  background-color: white;

  border-radius: 20px;

  @media(max-width: 650px) {
    width: 90%;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  &:hover{
    height: 260px;
    transition-duration: 0.4s;
  }
`

export const Image = styled(props => (<Img {...props}/>))`
  object-fit: "cover";
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
`

export const InfoContainer = styled.div`
  
`

export const Title = styled.h3`
  margin-top: 10px;
  text-align: center;
`

export const Tools = styled.p`
  width: 90%;
  text-align: center;
  margin: 5% auto;
`

export const Info = styled.p`
  width: 90%;
  margin: 0 auto;
  text-align: left;
`
import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 1200px;

  background-color: #08090F;
  @media(max-width: 1000px) {
    height: 3500px;
  }
`

export const PortfolioH2 = styled.h2`
  font-size: 50px;
  padding-bottom: 10px;
  color: white;
  text-align: center;
`

export const ProjectsContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
  
  @media(max-width: 1000px) {
    height: 95%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
  }
`

export const Project = styled.div`
  width: 30%;
  height: 500px;
  margin: 1%;

  color: white;
  background-color: #212121;

  border-radius: 20px;
  @media(max-width: 1000px) {
    margin: 0 0 80px 0;
    width: 100%;
    height: 100%;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;

  background-color: white;
  border: solid white 1px;
  border-radius: 20px;
  &:hover{
    height: 260px;
    transition-duration: 0.4s;
  }
  @media(max-width: 1000px) {
    height: 350px;
    &:hover{
      height: 350px;
    }
  }
`

export const InfoContainer = styled.div`
  height: 300px;
  @media(max-width: 1000px) {
    height: 150px;
  }
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

export const Image = styled(props => (<Img {...props}/>))`
  object-fit: "cover";
  height: 100%;
  width: 100%;
  border-radius: 20px;
`
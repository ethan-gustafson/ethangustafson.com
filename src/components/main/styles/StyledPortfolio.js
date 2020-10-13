import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

export const Section = styled.section`
  padding-top: 3%;
  width: 100%;
  height: 1050px;

  background-color: #08090F;
  border-bottom: solid white 1px;
`

export const PortfolioH2 = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
`

export const ProjectsContainer = styled.div`
  width: 95%;
  height: 800px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
`

export const Project = styled.div`
  width: 400px;
  height: 400px;

  margin: 25px 25px;
  background-color: white;

  border-radius: 20px;
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
  text-align: center;
`

export const Title = styled.h3`
  margin-top: 10px;
`

export const Tools = styled.p`

`

export const Info = styled.p`
  width: 90%;
  margin: 0 auto;
  text-align: left;
`
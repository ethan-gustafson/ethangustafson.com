import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

export const Section = styled.section`
  padding-top: 2%;
  width: 100%;
  height: 730px;

  background-color: black;
`

export const AboutH2 = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
`

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 95%;
`

export const ImgContainer = styled.div`
  flex: 1 1 50%;
  margin: 1%;
`

export const AboutImage = styled(props => (<Img {...props}/>))`
  object-fit: "cover";
  height: 100%;
  width: 100%;
  border-radius: 5px;
`

export const InfoContainer = styled.div`
  flex: 1 1 50%;
  margin: 1%;
`

export const P = styled.p`
  font-size: 24px;
  color: white;
  line-height: 1.5;
`
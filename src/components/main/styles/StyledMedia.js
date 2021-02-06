import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  height: 1460px;
  margin: 0 auto;
  padding-top: 2%;

  background-color: black;
`

export const Link = styled(props => (<A {...props}/>))`
  color: black;
  background-color: #e2c989;
  text-decoration: none;

  border-radius: 20px;
  padding: 20px;

  &:hover{
    color: white;
    background-color: #e3b65b;
    transition-duration: 0.4s;
  }
`

export const FilmmakingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3%;
  @media(max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const VideoFlexContainer = styled.div`
  flex: 1 0 30%;
  height: 250px;
  margin: 10px;
`

export const VideoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;

  height: 250px;
`

export const VideoIFrame = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 20px;
  border: solid white 1px;
`

export const PhotographyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5%;
  @media(max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const PhotoFlexContainer = styled.div`
  flex: 1 0 30%;
  margin: 10px;
`

export const PhotoContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 250px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`
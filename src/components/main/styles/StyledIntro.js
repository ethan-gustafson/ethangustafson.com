import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
`

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  text-align: center;
`

export const Name = styled.h1`
  font-size: 70px;
  text-shadow: white 0px 1px 1px;
`

export const Career = styled.h2`
  font-size: 50px;
`

export const PortfolioLink = styled(props => (<A {...props}/>))`
  color: white;
  background-color: #ef233c;
  text-decoration: none;

  border-radius: 20px;
  padding: 15px;
`

export const P = styled.p`
  margin-top: 1%;
`
import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
`

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  margin-left: 0;
  padding-top: 13px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`

export const LiLogo = styled.li`
  padding-top: 5px;
  grid-column: 3 / 7;
  list-style-type: none;
`

export const LogoLink = styled(props => (<A {...props}/>))`
  font-weight: bold;
  font-size: 28px;
  padding: 15px;

  color: white;

  text-decoration: none;
  border-radius: 50%;

  &:hover{
    background-color: #ef233c;
    transition-duration: 0.3s;
  }
`

export const Li = styled.li`
  list-style-type: none;
  text-align: center;
`

export const Link = styled(props => (<A {...props}/>))`
  font-size: 24px;

  color: white; 
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
`
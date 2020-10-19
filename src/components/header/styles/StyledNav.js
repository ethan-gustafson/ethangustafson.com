import React from 'react';
import styled from 'styled-components';

import { Link as A } from 'gatsby';

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
  grid-template-rows: 100%;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`

export const LiLogo = styled.li`
  grid-column: 3 / 7;
  list-style-type: none;

  display: flex;
  width: 60px;
  border-radius: 10px;

  filter: brightness(1);

  &:hover{
    background-color: #ef233c;
    transition-duration: 0.3s;
  }

  @media (max-width: 650px) {
    width: 40px;
  }
`

export const LogoLink = styled(props => (<A {...props}/>))`
  width: 100%;
  height: 100%;
  display: block;
  padding: 10px;
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
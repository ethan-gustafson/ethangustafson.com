import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 960;
  padding: 20px;
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li`
  list-style-type: none;
  margin-right: 20px;
`

export const Link = styled(props => (<A {...props}/>))`
  font-size: 24px;

  color: white; 
  text-decoration: none;
`

export const Logo = styled(props => (<A {...props}/>))`
  position: relative;

  color: white; 
  text-decoration: none;
  font-size: 24px;
`
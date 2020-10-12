import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 960;
`

export const Ul = styled.ul`

`

export const Li = styled.li`

`

export const Link = styled(props => (<A {...props}/>))`
  color: white; 
  text-decoration: none;
`
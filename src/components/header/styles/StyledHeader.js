// import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #151514;
  height: 80px;
  
  ${'' /* -webkit-sticky is needed for safari */}
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
`

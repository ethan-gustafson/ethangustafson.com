import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 670px;

  background-color: #08090F;
  @media(max-width: 1000px) {
    height: 3550px;
  }
`

export const BlogH2 = styled.h2`
  font-size: 50px;
  padding-bottom: 10px;
  color: white;
  text-align: center;
`

export const BlogsContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
  
  @media(max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
  }
`

export const BlogDiv = styled.div`
  width: 30%;
  height: 450px;
  margin: 1%;

  background-color: white;

  border-radius: 20px;
  @media(max-width: 1000px) {
    margin: 0 0 80px 0;
    width: 100%;
  }
`

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`
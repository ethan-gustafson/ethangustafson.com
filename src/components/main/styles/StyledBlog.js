import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 1200px;
  background-color: black;
  margin-bottom: 6%;
  @media(max-width: 1000px) {
    height: 3500px;
  }
`

export const BlogH2 = styled.h2`
  padding-top: 7%;
  padding-bottom: 2%;
  font-size: 50px;
  color: white;
  text-align: center;
`

export const BlogsContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  
  @media(max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
  }
`

export const BlogDiv = styled.div`
  width: 30%;
  height: 500px;
  margin: 0 15px 80px 15px;

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
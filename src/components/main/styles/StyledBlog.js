import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 1200px;
  background-color: black;
  margin-bottom: 6%;
`

export const BlogH2 = styled.h2`
  padding-top: 3%;
  padding-bottom: 2%;
  font-size: 50px;
  color: white;
  text-align: center;
`

export const BlogsContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 550px);
`

export const BlogDiv = styled.div`
  width: 85%;
  height: 500px;

  margin: 25px 25px;
  background-color: white;

  border-radius: 20px;
  text-align: center;
`

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`
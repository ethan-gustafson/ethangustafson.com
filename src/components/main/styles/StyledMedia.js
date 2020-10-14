import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  height: 730px;
  margin: 0 auto;
  padding-top: 2%;

  background-color: black;
`

export const FilmmakingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const VideoFlexContainer = styled.div`
  flex: 1 0 30%;
  margin: 10px;
`

export const VideoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
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
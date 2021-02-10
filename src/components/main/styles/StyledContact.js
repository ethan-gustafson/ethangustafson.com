import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 650px;

  background-color: #08090F;
  @media(max-width: 1000px) {
    height: 1200px;
    margin-top: 100px;
  }
`

export const ContactH2 = styled.h2`
  font-size: 50px;
  padding-bottom: 10px;
  color: white;
  text-align: center;
`

export const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
 
  display: flex;
  
  @media(max-width: 1000px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div`
  height: 450px;
  flex: 1 1 50%;
  margin: 1%;

  background-color: #e2c989;
  border-radius: 10px;
  display: flex;
  align-items: center;

  @media(max-width: 1000px) {
    margin: 1% auto;
    width: 95%;
  }
`

export const Form = styled.form`
  color: #151514;

  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 1%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media(max-width: 1000px) {
    width: 90%;
  }
`

export const InputContainer = styled.div`
  width: 100%;

  flex: 1 1 18%;
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 1%;

  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 1%;
`

export const Input = styled.input`
  font-size: 20px;
  &:-webkit-autofill::first-line {font-size: 20px}
  box-shadow: 0 2px 3px #353037;

  width: 100%;
  padding: 10px;
  margin: 1%;

  border-radius: 10px;
  border: none;
  &:hover{
    background-color: lightgrey;
    transition-duration: 0.4s;
  }

  @media(max-width: 1000px) {
    flex: 0 1 50%;
  }
`

export const TextAreaContainer = styled.div`
  width: 100%;
  text-align: center;

  margin: 1%;

  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  flex: 1 1 95%;

  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 1% auto;
  resize: none;

  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 3px #353037;

  &:hover{
    background-color: lightgrey;
    transition-duration: 0.4s;
  }
`

export const SendFormButton = styled.button`
  width: 30%;
  height: 70%;

  background-color: white;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 3px #353037;

  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 2;

  &:hover{
    background-color: lightgrey;
    transition-duration: 0.4s;
  }

  @media(max-width: 1000px) {
    height: 50%;
  }
`

export const IconsContainer = styled.div`
  height: 450px;
  flex: 1 1 50%;
  margin: 1%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 150px);
  align-items: center;

  @media(max-width: 1000px) {
    margin: 0 auto;
    width: 100%;
    padding-top: 5%;
    grid-template-rows: repeat(3, 216px);
  }
`

export const ImgContainer = styled.div`
  margin: 0 auto;

  background-color: #e2c989;
  border-radius: 10px;

  width: 108px;
  height: 108px;

  &:hover{
    opacity: 0.5;
    transition-duration: 0.4s;
  }
  @media(max-width: 1000px) {
    height: 50%;
  }
`
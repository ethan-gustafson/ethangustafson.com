import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 700px;
  background-color: black;
  @media(max-width: 1000px) {
    height: 1400px;
  }
`

export const ContactH2 = styled.h2`
  padding-top: 3%;
  padding-bottom: 2%;
  font-size: 50px;
  color: white;
  text-align: center;
`

export const MainContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
 
  display: flex;
  
  @media(max-width: 1000px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div`
  height: 650px;
  width: 50%;
  @media(max-width: 1000px) {
    width: 100%;
  }
`

export const Form = styled.form`
  color: black;
  background-color: #ef233c;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;
`

export const InputContainer = styled.div`
  flex: 0 1 25%;
  width: 100%;
  margin: 1%;

  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Input = styled.input`
  font-size: 24px;
  padding: 10px;
  margin: 0 auto;

  width: 90%;

  border-radius: 10px;
  border: none;
`

export const TextArea = styled.textarea`
  margin: 0 auto;
  resize: none;
  border-radius: 10px;
  width: 90%;
  height: 300px;
  padding: 20px;
  border: none;
`

export const SendFormButton = styled.button`
  margin: 3% auto 2% auto;
  width: 30%;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`

export const IconsContainer = styled.div`
  height: 700px;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 200px);
  justify-content: center;
  align-items: center;

  @media(max-width: 1000px) {
    width: 95%;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(3, 200px);
    justify-content: center;
    align-items: center;
  }
`

export const ImgContainer = styled.div`
  margin: 0 auto;
  background-color: #ef233c;
  border-radius: 10px;
  width: 50%;
  height: 50%;
`
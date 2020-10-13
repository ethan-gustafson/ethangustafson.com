import React from 'react';
import { 
  Section, 
  ContactH2,
  MainContainer,
  FormContainer,
  Form,
  InputContainer,
  Input,
  TextArea,
  SendFormButton,
  IconsContainer,
  ImgContainer
} from "./styles/StyledContact.js";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import Img from "gatsby-image";
import resumeFile from "../../../Ethan_Gustafson_Resume.pdf";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "icons/resume512.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "icons/github.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "icons/linkedin.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blog: file(relativePath: { eq: "icons/dev-rainbow.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "icons/twitter.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "icons/youtube.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flickr: file(relativePath: { eq: "icons/flickr.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flatiron: file(relativePath: { eq: "icons/flatiron.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fullsail: file(relativePath: { eq: "icons/fullsail.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const redirect = () => {

  }

  return (
    <Section id="contact">
      <ContactH2>Contact</ContactH2>
      <MainContainer>
        <FormContainer>

          <Form name="contact" method="POST" netlify>
            <InputContainer>
              <label htmlFor="name">Your Name:</label>
              <Input  id="name" type="text" name="name" placeholder="Name"/>
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">Your Email:</label>
              <Input id="email" type="email" name="email" placeholder="Email"/>
            </InputContainer>

            <InputContainer>
              <label htmlFor="message">Message:</label>
              <TextArea id="message" name="message" placeholder="Message"></TextArea>
            </InputContainer>

            <InputContainer>
              <SendFormButton type="submit">Send</SendFormButton>
            </InputContainer>
          </Form>

        </FormContainer>
        
        <IconsContainer>

          <ImgContainer>
            <Link target="#" href={resumeFile} download>
              <Img imgStyle={{borderRadius: "10px"}} fluid={data.resume.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.github.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.linkedin.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.blog.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.twitter.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.youtube.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.flickr.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.flatiron.childImageSharp.fluid}/>
          </ImgContainer>

          <ImgContainer>
            <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.fullsail.childImageSharp.fluid}/>
          </ImgContainer>

        </IconsContainer>
      </MainContainer>
    </Section>
  )
}

export default Contact;
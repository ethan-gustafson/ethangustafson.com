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
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ResumeFile from "../../../EthanGustafson_Resume_Oct2020.pdf";

function Contact(){
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

  return (
    <Section id="contact">
      <ContactH2>Contact</ContactH2>
      <MainContainer>
        <FormContainer>

          <Form action="/thank-you" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
            <InputContainer>
              <label style={{fontSize: "24px", padding: "2%"}} htmlFor="name">Your Name:</label>
              <Input  id="name" type="text" name="name" placeholder="Name"/>
            </InputContainer>

            <InputContainer>
              <label style={{fontSize: "24px", padding: "2%"}} htmlFor="email">Your Email:</label>
              <Input id="email" type="email" name="email" placeholder="Email"/>
            </InputContainer>

            <InputContainer>
              <label style={{fontSize: "24px", padding: "2%"}} htmlFor="message">Message:</label>
              <TextArea id="message" name="message" placeholder="Message"></TextArea>
            </InputContainer>

            <InputContainer>
              <SendFormButton type="submit">Send</SendFormButton>
            </InputContainer>
          </Form>

        </FormContainer>
        
        <IconsContainer>

          <ImgContainer>
            <Link target="#" href={ResumeFile} download>
              <Img imgStyle={{borderRadius: "10px"}} fluid={data.resume.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://github.com/GoodGuyGuf">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.github.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://www.linkedin.com/in/ethangustafson/">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.linkedin.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://dev.to/ethanmgustafson">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.blog.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://twitter.com/ethanMGustafson">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.twitter.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://www.youtube.com/channel/UCWIqtGDXMRB6xgA-n5aOgoQ">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.youtube.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://www.flickr.com/photos/127589825@N02/">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.flickr.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://flatironschool.com/">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.flatiron.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

          <ImgContainer>
            <Link target="#" to="https://www.fullsail.edu/">
              <Img imgStyle={{borderRadius: "10px", objectFit: "cover"}} fluid={data.fullsail.childImageSharp.fluid}/>
            </Link>
          </ImgContainer>

        </IconsContainer>
      </MainContainer>
    </Section>
  )
}

export default Contact;
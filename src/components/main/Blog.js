import React from 'react';
import { 
  Section, 
  BlogH2, 
  BlogsContainer,
  BlogDiv,
  BlogImage,
  BlogInfo 
} from "./styles/StyledBlog.js";

const Blog = () => (
  <Section>
    <BlogH2 id="blog">Blog</BlogH2>
    <BlogsContainer>
      <BlogDiv>
        <BlogImage></BlogImage>
        <BlogInfo></BlogInfo>
      </BlogDiv>
      <BlogDiv></BlogDiv>
      <BlogDiv></BlogDiv>
      <BlogDiv></BlogDiv>
      <BlogDiv></BlogDiv>
      <BlogDiv></BlogDiv>
    </BlogsContainer>
  </Section>
)

export default Blog;
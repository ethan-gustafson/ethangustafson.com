import React from 'react';
import { 
  Section, 
  BlogH2, 
  BlogsContainer,
  BlogDiv,
  IFrame
} from "./styles/StyledBlog.js";

const Blog = () => {
  return (
    <Section>
      <div id="blog" style={{position: "relative", top: "-100px"}}></div>
      <BlogH2>Blog</BlogH2>
      <BlogsContainer>
        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/what-is-the-clear-definition-of-an-api-gmn" 
            title="What is the Clear Definition of an API?"
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/big-o-notation-time-space-complexity-44l9" 
            title="Big O Notation, Time & Space Complexity Overview"  
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/c-environment-configuration-vs-code-macos-30ga" 
            title="C Environment"
          />
        </BlogDiv>
      </BlogsContainer>
    </Section>
  )
}

export default Blog;
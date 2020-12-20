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

        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/rspec-pt-3-test-doubles-3mml" 
            title="RSpec Test Doubles" 
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/css-float-flexbox-14fg" 
            title="CSS Float & Flexbox"
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame 
            src="https://dev.to/ethanmgustafson/simple-guide-to-css-grid-3cja" 
            title="Simple Guide To CSS Grid"
          />
        </BlogDiv>

      </BlogsContainer>
    </Section>
  )
}

export default Blog;
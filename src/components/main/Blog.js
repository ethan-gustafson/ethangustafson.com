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
      <BlogH2 id="blog">Blog</BlogH2>
      <BlogsContainer>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/simple-recursion-challenges-ruby-js-python-55j7" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/c-environment-configuration-vs-code-macos-30ga" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/intro-to-learning-c-20eo" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/rspec-pt-3-test-doubles-3mml" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/css-float-flexbox-14fg" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/simple-guide-to-css-grid-3cja" />
        </BlogDiv>

      </BlogsContainer>
    </Section>
  )
}

export default Blog;
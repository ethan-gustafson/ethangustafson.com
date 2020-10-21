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
            src="https://dev.to/ethanmgustafson/action-cable-configuration-subscriptions-4b9" 
            title="Action Cable Configuration & Subscriptions in Rails"
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/building-a-website-with-gatsby-js-2h14" title="Building a website with Gatsby.js" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/c-environment-configuration-vs-code-macos-30ga" 
            title="C Environment"
          />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/rspec-pt-3-test-doubles-3mml" title="RSpec Test Doubles" />
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/css-float-flexbox-14fg" title="CSS Float & Flexbox"/>
        </BlogDiv>

        <BlogDiv>
          <IFrame src="https://dev.to/ethanmgustafson/simple-guide-to-css-grid-3cja" title="Simple Guide To CSS Grid"/>
        </BlogDiv>

      </BlogsContainer>
    </Section>
  )
}

export default Blog;
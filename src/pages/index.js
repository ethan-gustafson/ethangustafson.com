import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/main/Intro.js";
import PortfolioImages from "../components/main/images/PortfolioImagesQuery.js";
import Blog from "../components/main/Blog.js";
import Contact from "../components/main/Contact.js";

const IndexPage = () => {
  require('../css/global.css')
  return(
    <Layout>
      <SEO title="Home" />
      <Intro/>
      <PortfolioImages/>
      <Blog/>
      <Contact/>
    </Layout>
  )
};

export default IndexPage;

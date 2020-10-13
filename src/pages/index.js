import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/main/Intro.js";
import PortfolioImages from "../components/main/images/PortfolioImagesQuery.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <PortfolioImages/>
  </Layout>
);

export default IndexPage;

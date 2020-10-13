import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/main/Intro.js";
import Portfolio from "../components/main/Portfolio.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <Portfolio/>
  </Layout>
);

export default IndexPage;

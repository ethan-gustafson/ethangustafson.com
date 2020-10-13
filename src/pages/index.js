import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/main/Intro.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
  </Layout>
);

export default IndexPage;

import React from "react";

import Layout from "../components/layout";
import AboutImageQuery from "../components/main/images/AboutImageQuery.js"
import SEO from "../components/seo";

const AboutPage = () => {
  require('../css/about.css')
  return (
    <Layout>
      <SEO title="About" />
      <AboutImageQuery/>
    </Layout>
  )
}

export default AboutPage;

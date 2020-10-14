import React from "react";

import AboutLayout from "../components/AboutLayout";
import AboutImageQuery from "../components/main/images/AboutImageQuery.js";
import SEO from "../components/seo";

const AboutPage = () => (
  <AboutLayout>
    <SEO title="About" />
    <AboutImageQuery/>
  </AboutLayout>
)


export default AboutPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You!" />
    <h1 style={{color: "white", margin: "15% auto 3% auto", textAlign: "center"}}>Thank you for reaching out!</h1>
    <h2 style={{color: "white", margin: "0 auto", textAlign: "center"}}>I will be with you shortly.</h2>
  </Layout>
)

export default ThankYouPage;
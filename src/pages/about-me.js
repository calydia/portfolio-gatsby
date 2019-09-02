import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="layout-page about-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About me | Portfolio - Sanna Mäkinen </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1>About me</h1>
        {data.allNodePage.nodes.map((node, index) => {
          return <div key={index} dangerouslySetInnerHTML={{ __html: node.body.value }}></div>
        })}

      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutMe {
    allNodePage(filter: {id: {eq: "1c25717d-7e2d-529e-af1c-292638e2bb5f"}}) {
      nodes {
        title
        id
        body {
          value
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="layout-page skills-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skills and tools | Portfolio - Sanna Mäkinen </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1>Skills and Tools</h1>
        {data.allNodePage.nodes.map((node, index) => {
          return <div key={index} dangerouslySetInnerHTML={{ __html: node.body.value }}></div>
        })}

      </div>
    </Layout>
  );
};

export const query = graphql`
  query Skills {
    allNodePage(filter: {id: {eq: "6e60439e-765f-5fb1-8be9-dcea66a48352"}}) {
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

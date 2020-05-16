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
          {data.allNodePage.nodes.map((node, index) => {
            return (
              <meta
                property="og:description"
                content={node.field_meta_tags.description}
              />
            );
          })}
          {data.allNodePage.nodes.map((node, index) => {
            return (
              <meta
                name="Description"
                content={node.field_meta_tags.description}
              />
            );
          })}
          <meta property="og:title" content="About me" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja/about-me/" />
          <meta property="og:image" content="../images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="canonical" href="https://sanna.ninja/about-me/" />
        </Helmet>

        <h1>About me</h1>
        {data.allNodePage.nodes.map((node, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: node.body.value }}
            ></div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutMe {
    allNodePage(
      filter: { id: { eq: "1c25717d-7e2d-529e-af1c-292638e2bb5f" } }
    ) {
      nodes {
        title
        id
        body {
          value
        }
        field_meta_tags {
          description
        }
      }
    }
  }
`;

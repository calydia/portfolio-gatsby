import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <main className="layout-page skills-page" id="main-skip">
        <Helmet>
          <title>Skills and tools | Portfolio - Sanna Mäkinen </title>
          {data.allNodePage.nodes.map((node, index) => {
            return (
              <meta
                property="og:description"
                key={index}
                content={node.field_meta_tags.description}
              />
            );
          })}
          {data.allNodePage.nodes.map((node, index) => {
            return (
              <meta
                name="Description"
                key={index}
                content={node.field_meta_tags.description}
              />
            );
          })}
          <meta property="og:title" content="Skills and tools" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja/skills/" />
          <meta property="og:image" content="/images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="canonical" href="https://sanna.ninja/skills/" />
        </Helmet>

        <h1>Skills and Tools</h1>
        {data.allNodePage.nodes.map((node, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: node.body.value }}
            ></div>
          );
        })}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query Skills {
    allNodePage(
      filter: { id: { eq: "6e60439e-765f-5fb1-8be9-dcea66a48352" } }
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

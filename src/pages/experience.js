import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import styles from "../components/experience.module.scss";

export default ({ data }) => {
  return (
    <Layout>
      <div className="layout-page experience-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work experience | Portfolio - Sanna Mäkinen </title>
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
          <meta property="og:title" content="Work experience" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja/experience/" />
          <meta property="og:image" content="../images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="canonical" href="https://sanna.ninja/experience/" />
        </Helmet>

        <h1>Work experience</h1>
        <div className="work-experiences">
          {data.allNodeWorkExperience.nodes.map((position, index) => {
            return (
              <div className="experience" key={`experience-${index}`}>
                <div className={styles.positionTitle}>{position.title}</div>
                <div className="position-company">
                  {position.field_company.title}
                </div>
                <div className="position-duration">
                  {position.field_start_date}
                  {position.field_end_date
                    ? " - " + position.field_end_date
                    : ""}
                </div>
                <div className="position-description">
                  {position.body ? (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: position.body.value }}
                    ></div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Experience {
    allNodeWorkExperience(sort: { fields: field_start_date, order: DESC }) {
      nodes {
        title
        body {
          value
        }
        field_company {
          title
          uri
        }
        field_end_date(formatString: "MM/YYYY")
        field_start_date(formatString: "MM/YYYY")
      }
    }
    allNodePage(
      filter: { id: { eq: "5ef844c8-d6f1-5a04-8d79-6c3d06ec9d19" } }
    ) {
      nodes {
        field_meta_tags {
          description
        }
      }
    }
  }
`;

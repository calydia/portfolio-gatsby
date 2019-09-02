import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="experience-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Experience | Portfolio - Sanna Mäkinen </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1>Work experience</h1>
        <div className="work-experiences">
          {data.allNodeWorkExperience.nodes.map((position, index) => {
            return (
              <div className="experience" key={`experience-${index}`}>
                <div className="position-title">{position.title}</div>
                <div className="position-company">
                  {position.field_company.title}
                </div>
                <div className="position-duration">
                  {position.field_start_date}
                  {position.field_end_date ? " - " + position.field_end_date : ""}
                </div>
                <div className="position-description">
                  {position.body ? position.body.summary : ""}
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
          summary
        }
        field_company {
          title
          uri
        }
        field_end_date(formatString: "MM/YYYY")
        field_start_date(formatString: "MM/YYYY")
      }
    }
  }
`;

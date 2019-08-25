import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <div className="testi">
      <h1>Projects</h1>

      {data.allNodeProject.edges.map(({ node }, index) => (
        <div className="project" key={index}>
          <h2>{node.title}</h2>
          {node.relationships.field_related_to_work_experience ? (
            <div className="work-relation">
              <span>Work project at&nbsp;</span>
              <a
                href={
                  node.relationships.field_related_to_work_experience
                    .field_company.uri
                }
              >
                {
                  node.relationships.field_related_to_work_experience
                    .field_company.title
                }
              </a>
            </div>
          ) : (
            ""
          )}
          <span>Year: {node.field_year}</span>

          <div className="node-content">
            {node.body ? node.body.summary : ""}
          </div>

          <div className="project-roles">
            <h3>Roles in the project:</h3>
            {node.relationships.field_roles_in_the_project
              ? node.relationships.field_roles_in_the_project.map(role => {
                  return <div key={role.id}>{role.name}</div>;
                })
              : ""}
          </div>

          {node.field_link_to_repository
            ? node.field_link_to_repository.map(item => {
                return (
                  <div className="repository-links" key={item.title}>
                    <a target="_blank" href={item.uri}>
                      {item.title}
                    </a>
                  </div>
                );
              })
            : ""}

          <div className="project-link">
            {node.field_link_to_project ? (
              <a target="_blank" href={node.field_link_to_project.uri}>
                {node.field_link_to_project.title}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allNodeProject(sort: { fields: field_year, order: DESC }) {
      edges {
        node {
          id
          title
          body {
            summary
          }
          field_link_to_project {
            title
            uri
          }
          field_link_to_repository {
            title
            uri
          }
          field_year
          relationships {
            field_related_to_work_experience {
              field_company {
                uri
                title
              }
            }
            field_roles_in_the_project {
              id
              name
            }
          }
        }
      }
    }
  }
`;

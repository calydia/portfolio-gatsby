import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import styles from "../components/projects.module.scss";

export default ({ data }) => {
  return (
    <Layout>
      <main className="layout-page project-page" id="main-skip">
        <Helmet>
          <title>Projects | Portfolio - Sanna Mäkinen </title>
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
          <meta property="og:title" content="Projects" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja/projects/" />
          <meta property="og:image" content="../images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="canonical" href="https://sanna.ninja/projects/" />
        </Helmet>
        <h1>Projects</h1>
        <div className={styles.projectContainer}>
          {data.allNodeProject.edges.map(({ node }, index) => (
            <div className={styles.project} key={index}>
              <div className="project-content">
                <h2 tabIndex="-1">{node.title}</h2>
                {node.relationships.field_related_to_work_experience ? (
                  <div className="work-relation">
                    <span>Work project at&nbsp;</span>
                    <a
                      href={
                        node.relationships.field_related_to_work_experience
                          .field_company.uri
                      }
                      target="_blank"
                      rel="noopener noreferrer"
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
                  {node.body ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: node.body.value }}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div className="project-roles">
                  <h3>Roles in the project:</h3>
                  {node.relationships.field_roles_in_the_project
                    ? node.relationships.field_roles_in_the_project.map(
                        (role) => {
                          return <div key={role.id}>{role.name}</div>;
                        }
                      )
                    : ""}
                </div>

                <div className={styles.projectTechs}>
                  <h3>Technologies:</h3>
                  {node.relationships.field_technologies
                    ? node.relationships.field_technologies.map((tech) => {
                        return <div key={tech.id}>{tech.name}</div>;
                      })
                    : ""}
                </div>

                {node.field_link_to_repository
                  ? node.field_link_to_repository.map((item) => {
                      return (
                        <div className={styles.repositoryLink} key={item.title}>
                          <a
                            target="_blank"
                            href={item.uri}
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        </div>
                      );
                    })
                  : ""}

                <div className={styles.projectLink}>
                  {node.field_link_to_project ? (
                    <a
                      target="_blank"
                      href={node.field_link_to_project.uri}
                      rel="noopener noreferrer"
                    >
                      {node.field_link_to_project.title}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query Projects {
    allNodePage(
      filter: { id: { eq: "accd3916-7447-5a57-ac3f-69df9bf60af2" } }
    ) {
      nodes {
        field_meta_tags {
          description
        }
      }
    }
    allNodeProject(sort: { fields: field_year, order: DESC }) {
      edges {
        node {
          id
          title
          body {
            value
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
            field_technologies {
              name
              id
            }
            field_project_image {
              field_media_image {
                alt
                title
                width
                height
              }
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxHeight: 320, maxWidth: 430) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

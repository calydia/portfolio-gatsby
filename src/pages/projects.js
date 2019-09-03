import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout";
import styles from "../components/projects.module.scss";

export default ({ data }) => {
  console.log(styles);

  var settings = {
    dots: true,
    arrows: false,
    dotsClass: "my-dots",
  };

  return (
    <Layout>
      <div className="layout-page project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | Portfolio - Sanna Mäkinen </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>Projects</h1>
        <div className={styles.projectContainer}>
          {data.allNodeProject.edges.map(({ node }, index) => (
            <div className={styles.project} key={index}>
              <div className="project-images">
                <Slider {...settings}>
                  {node.relationships.field_project_image
                    ? node.relationships.field_project_image.map(image => {
                        return (
                          <Img
                            fluid={
                              image.relationships.field_media_image.localFile
                                .childImageSharp.fluid
                            }
                            key={
                              image.relationships.field_media_image.localFile.id
                            }
                            alt={image.field_media_image.alt}
                          />
                        );
                      })
                    : ""}
                </Slider>
              </div>

              <div className="project-content">
                <h2>{node.title}</h2>
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
                        role => {
                          return <div key={role.id}>{role.name}</div>;
                        }
                      )
                    : ""}
                </div>

                <div className={styles.projectTechs}>
                  <h3>Technologies:</h3>
                  {node.relationships.field_technologies
                    ? node.relationships.field_technologies.map(tech => {
                        return <div key={tech.id}>{tech.name}</div>;
                      })
                    : ""}
                </div>

                {node.field_link_to_repository
                  ? node.field_link_to_repository.map(item => {
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
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Projects {
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
                      fluid(maxHeight: 446, maxWidth: 600) {
                        ...GatsbyImageSharpFluid
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

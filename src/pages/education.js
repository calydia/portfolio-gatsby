import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import styles from "../components/education.module.scss";

export default ({ data }) => {
  return (
    <Layout>
      <div className="layout-page education-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Education | Portfolio - Sanna Mäkinen </title>
          <meta
            property="og:description"
            content={data.nodeEducation.field_meta_tags.description}
          />
          <meta
            name="Description"
            content={data.nodeEducation.field_meta_tags.description}
          />
          <meta property="og:title" content="Education" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja/education" />
          <meta property="og:image" content="../images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>

        <h1>Education</h1>
        <div className="schools">
          {data.nodeEducation.relationships.field_school.map(
            (course, index) => {
              return (
                <div className={styles.school} key={`school-${index}`}>
                  <div className={styles.schoolEducationTitle}>
                    {course.field_title}
                  </div>
                  <div className="school-duration">{course.field_duration}</div>
                  <div className="school-name">{course.field_school_name}</div>
                </div>
              );
            }
          )}
        </div>
        <h2>Courses</h2>
        <div className="courses">
          {data.nodeEducation.relationships.field_courses.map(
            (course, index) => {
              return (
                <div className={styles.course} key={`course-${index}`}>
                  <div className={styles.courseTitle}>{course.field_title}</div>
                  <div className="course-date">{course.field_month_year}</div>
                  <div className="course-educator">{course.field_educator}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Education {
    nodeEducation {
      id
      title
      field_meta_tags {
        description
      }
      relationships {
        field_courses {
          field_educator
          field_month_year
          field_title
        }
        field_school {
          field_duration
          field_school_name
          field_title
        }
      }
    }
  }
`;

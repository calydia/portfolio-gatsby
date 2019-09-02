import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="layout-page education-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Education | Portfolio - Sanna Mäkinen </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1>Education</h1>
        <div className="schools">
          {data.nodeEducation.relationships.field_school.map((course, index) => {
            return (
              <div className="school" key={`school-${index}`}>
                <div className="school-education-title">{course.field_title}</div>
                <div className="school-duration">{course.field_duration}</div>
                <div className="school-name">{course.field_school_name}</div>
              </div>
            );
          })}
        </div>
        <h2>Courses</h2>
        <div className="courses">
          {data.nodeEducation.relationships.field_courses.map((course, index) => {
            return (
              <div className="course" key={`course-${index}`}>
                <div className="course-title">{course.field_title}</div>
                <div className="course-date">{course.field_month_year}</div>
                <div className="course-educator">{course.field_educator}</div>
              </div>
            );
          })}
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

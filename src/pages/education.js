import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Breadcrumb from '../components/styles/Breadcrumb';

const CourseYear = styled.div`
  margin: 1em 0;
  h2 {
    border-bottom: 3px solid;
    border-image: ${({ theme }) => theme.gradient};
    border-image-slice: 1;
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6em;
    @media only screen and (min-width: 768px) {
      margin-bottom: 0.8em;
      padding: 0 1.6em;
    }
  }
  .course--item {
    padding: 0.5em 0.5em;
    @media only screen and (min-width: 768px) {
      padding: 1em 4em;
    }
    span {
      display: block;
      font-size: 1.1rem;
      margin: 0.2em 0.8em;
      @media only screen and (min-width: 768px) {
        margin: 0.2em 1.2em;
      }
    }
  }
`;

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
`;

const Education = ({ data }) => {
  const page = data.drupal.education;
  const items = data.drupal.courses.items;

  // https://stackoverflow.com/a/46431916/2124978
  const groupBy = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }),
    {},
  );

  const groupedItems = groupBy(items, "year");

  return (
    <Layout>
      <Helmet>
        <title>Education | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={page.metaDescription} />
        <meta
          property="og:description"
          content={page.metaDescription}
        />
        <meta property="og:title" content="Education" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
        <meta property="og:url" content="https://sanna.ninja/education/" />
        <meta property="og:image" content="../images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sanna.ninja/education/" />
      </Helmet>
      <MainStyles>
        <Breadcrumb>
          <ul>
            <li>
              <Link
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              { page.title }
            </li>
          </ul>
        </Breadcrumb>
        <h1 id="skip-target">{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.schoolInfo }}></div>
        {Object.keys(groupedItems).reverse().map((item, index) => {
          return(
            <CourseYear key={`course--${index}`} className="course-year--wrapper">
              <h2>{item}</h2>
              {groupedItems[item].map((node, index) => {
                return (
                  <div key={`course-item-${node.year}-${index}`} className="course--item">
                    <h3 className="course--title">
                        {node.title}
                    </h3>
                    <div className="course--info">
                      <span className="course--info--date">{dayjs(node.date).format(`YYYY/MM`)}</span>
                      <span className="course--info--educator">Educator: {node.educator}</span>

                      {node.relatedExperienceName ? <span className="course--info--experience">Related to work experience: {node.relatedExperienceName}</span> : ''}
                      {node.certificateLink.uri ? <a href={node.certificateLink.uri} className="course--info--certificate-link">{node.cerfificateLink.title}</a> : ''}
                    </div>
                  </div>
                );
              })}
            </CourseYear>
          );
        })}
      </MainStyles>
    </Layout>
  );
}

export default Education;

export const query = graphql`
  query GetEducation {
    drupal {
      education(id: 3) {
        title
        schoolInfo
      }
      courses(limit: 100) {
        items {
          title
          certificateLink {
            uri
            title
          }
          date
          educator
          year
          relatedExperienceName
        }
      }
    }
  }
`;


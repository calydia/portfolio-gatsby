import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Breadcrumb from '../components/styles/Breadcrumb';

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
  .some-container {
    display: flex;
    list-style: none;
    margin-left: -5px;
    padding-left: 0;
    li {
      margin-right: 0.5em;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  .some-icon {
    display: block;
    height: 45px;
    text-indent: -9999px;
    transition: all 0.1s ease-in-out;
    width: 45px;
    &:focus {
      outline: 2px dotted ${({ theme }) => theme.text};
      outline-offset: 0;
    }
  }

  .twitter-link {
    background: ${({ theme }) => theme.someTwitter};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    &:hover {
      background-size: 34px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }

  .instagram-link {
    background: ${({ theme }) => theme.someInstagram};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    &:hover {
      background-size: 34px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }

  .devto-link {
    background: ${({ theme }) => theme.someDevTo};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    &:hover {
      background-size: 34px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
`;

const AboutMe = ({ data }) => {
  const page = data.drupal.page;

  return (
    <Layout>
      <Helmet>
          <title>About me | Portfolio - Sanna Mäkinen</title>
          <meta name="Description" content={page.metaDescription} />
          <meta
            property="og:description"
            content={page.metaDescription}
          />
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
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </MainStyles>
    </Layout>
  );
}

export default AboutMe;

export const query = graphql`
  query GetAboutMePage {
    drupal {
      page(id: 12) {
        title
        content
        metaDescription
      }
    }
  }
`;

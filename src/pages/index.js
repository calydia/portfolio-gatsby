import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import styled from 'styled-components';

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
`;

const HomeContent = ({ data }) => {
  const page = data.drupal.page;

  return (
    <Layout>
      <Helmet>
        <title>Hello! | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={page.metaDescription} />
        <meta
          property="og:description"
          content={page.metaDescription}
        />
        <meta property="og:title" content="Hello!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
        <meta property="og:url" content="https://sanna.ninja/" />
        <meta property="og:image" content="../images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sanna.ninja/" />
      </Helmet>
      <MainStyles>
        <h1 id="skip-target">{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </MainStyles>
    </Layout>
  );
}

export default HomeContent;

export const query = graphql`
  query GetFrontPage {
    drupal {
      page(id: 14) {
        title
        content
        metaDescription
      }
    }
  }
`;


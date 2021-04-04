import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Breadcrumb from '../components/styles/Breadcrumb';

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
`;

const ExperienceItem = styled.div`
  border-bottom: 3px solid;
  border-image: ${({ theme }) => theme.gradient};
  border-image-slice: 1;
  padding: 1em 0.8em;
  @media only screen and (min-width: 768px) {
    padding: 2em;
  }
  &:first-of-type {
    border-top: 3px solid;
    border-image: ${({ theme }) => theme.gradient};
    border-image-slice: 1;
    margin-top: 2em;
    @media only screen and (min-width: 768px) {
      margin-top: 3em;
    }
  }
  &:last-of-type {
    margin-bottom: 2em;
    @media only screen and (min-width: 768px) {
      margin-bottom: 4em;
    }
  }
`;

const ExperienceDate = styled.span`
  display: block;
  font-weight: 1.1rem;
  margin-bottom: 0.5em;
`;

const ExperienceLink = styled.a`
  font-size: 1.1rem;
`;

const WorkExperience = ({ data }) => {
  const listing = data.drupal.experiences;

  return (
    <Layout>
      <Helmet>
        <title>Work experience | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={listing.metaDescription} />
        <meta
          property="og:description"
          content={listing.metaDescription}
        />
        <meta property="og:title" content="Work experience" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
        <meta property="og:url" content="https://sanna.ninja/work-experience/" />
        <meta property="og:image" content="../images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sanna.ninja/woek-experience/" />
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
              Work experience
            </li>
          </ul>
        </Breadcrumb>
        <h1 id="skip-target">Work experience</h1>

        {listing.items.map((node, index) => {
          return (
            <ExperienceItem key={`experience-${index}`} className="experience--item">
                <h2 className="project-content">
                    {node.title}
                </h2>
                <div className="experience--info">
                  <ExperienceDate>
                    {dayjs(node.startDate).format(`YYYY/MM`)}{ node.endDate ? ' - ' + dayjs(node.endDate).format(`YYYY/MM`) : ''}
                  </ExperienceDate>
                  {node.companyLink.map((company, index) => {
                    return (
                      <ExperienceLink key={`company-${index}`} href={company.uri}>{ company.title }</ExperienceLink>
                    );
                  })}
                </div>
                <div dangerouslySetInnerHTML={{ __html: node.content }}></div>
            </ExperienceItem>
          );
        })}
      </MainStyles>
    </Layout>
  );
};



export default WorkExperience;

export const query = graphql`
  query GetExperiences {
    drupal {
      experiences(limit: 100) {
        items {
          companyLink {
            title
            uri
          }
          content
          endDate
          title
          startDate
        }
      }
    }
  }
`;


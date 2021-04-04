import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import TechLogos from '../components/styles/TechLogos';
import TechWrapper from '../components/styles/TechWrapper';
import Breadcrumb from '../components/styles/Breadcrumb';
import ProjectCredits from '../components/styles/ProjectCredits';

const MainStyles = styled.div`
  padding: 2em 2em 0 2em;
  margin: 0 auto;
  max-width: 80em;
`;

const ProjectWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0 auto;
  max-width: 94em;
  @media only screen and (min-width: 768px) {
    padding: 0 2em 2em 2em;
  }
`;

const ProjectItem = styled.li`
  background-size: cover;
  margin: 2em 0;
  padding: 1em 1em 2.5em 1em;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin: 3em 0;
    padding: 4em;
  }
  .project--content {
    background-color: ${({ theme }) => theme.boxColor};
    backdrop-filter: blur(5px);
    border: 3px solid;
    border-image: ${({ theme }) => theme.gradient};
    border-image-slice: 1;
    color: ${({ theme }) => theme.text};
    padding: 1em;
    max-width: 40em;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      padding: 2em;
    }
  }
  .project--decorative-image {
    height: 100%;
    position: absolute;
    width: 100%;
    object-fit: cover;
  }
  .project--listing-title {
    display: block;
    margin: 0 0 1em 0;
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: underline;
      text-underline-offset: 9px;
      text-decoration-thickness: 2px;
      &:hover {
        color: ${({ theme }) => theme.buttonHover};
        outline: 2px solid ${({ theme }) => theme.buttonHover};
        outline-offset: 2px;
        text-decoration: none;
      }
      &:focus {
        color: ${({ theme }) => theme.buttonHover};
        outline: 2px dotted ${({ theme }) => theme.buttonHover};
        outline-offset: 5px;
        text-decoration: none;
      }
    }
  }
  .project--description {
    font-size: 1.2rem;
  }
`;

const Projects = ({ data }) => {
  const listing = data.drupal.projects;

  return (
    <Layout>
      <Helmet>
        <title>Projects | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={listing.metaDescription} />
        <meta
          property="og:description"
          content={listing.metaDescription}
        />
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
              Projects
            </li>
          </ul>
        </Breadcrumb>
        <h1 id="skip-target">Projects</h1>
        <div><p>Some of the projects I've been working on in the last couple of years.</p></div>
      </MainStyles>
      <ProjectWrapper>
      {listing.items.map((node, index) => {
          return (
            <ProjectItem key={`list-item${index}`} style={{ backgroundImage: 'url(' + node.decorativeImage + ')' }}>
              <article className="project--content">
                <h2 className="project--listing-title">
                <a href={`/${node.slug}`}>{node.title}</a>
                </h2>
                <div className="project--description" dangerouslySetInnerHTML={{ __html: node.contentSummary }}></div>
                <TechWrapper>
                  {node.technologies.map((tech, index) => {
                    return (
                      <TechLogos key={`tech-item${index}`} className={`logo--${tech.name.toLowerCase()}`}>
                        <a href={tech.url}>{ tech.name }</a>
                      </TechLogos>
                    );
                  })}
                </TechWrapper>
              </article>
              {node.decorativeImageCredits ? <ProjectCredits dangerouslySetInnerHTML={{ __html: node.decorativeImageCredits }}></ProjectCredits> : ''}
            </ProjectItem>
          );
        })}
      </ProjectWrapper>
    </Layout>
  );
}

export default Projects;

export const query = graphql`
  query GetProjects {
    drupal{
      projects(limit: 100) {
        items {
          contentSummary
          slug
          title
          listingImage
          listingImageFile  {
            childImageSharp {
              gatsbyImageData(
                width: 350
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          decorativeImageCredits
          decorativeImage
          technologies {
            id
            name
            url
          }
        }
      }
    }
  }
`;


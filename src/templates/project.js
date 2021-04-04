import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Breadcrumb from '../components/styles/Breadcrumb';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import TechLogos from '../components/styles/TechLogos';
import TechWrapper from '../components/styles/TechWrapper';
import ProjectCredits from '../components/styles/ProjectCredits';

const ProjectHeader = styled.div`
  position: relative;
`;

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
  .project--year {
    font-size: 1.1rem;
  }
  .project--tech-title {
    text-align: center;
  }
`;

const LinkWrapper = styled.div`
  .project--repo-link {
    display: inline-block;
  }
  .project--project-link {
    display: inline-block;
  }
`;

const ProjectImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.galleryBg};
  border: 5px solid ${({ theme }) => theme.galleryBorder};
  display: grid;
  gap: 1.5em;
  margin: 3em 0;
  padding: 2em;
  @media only screen and (min-width: 768px) {
    gap: 2em;
    grid-template-columns: 1fr 1fr 1fr;
  }
  h2 {
    margin: 0;
    text-align: center;
    @media only screen and (min-width: 768px) {
      grid-column: 1 / 4;
    }
  }
  img {
    height: auto;
    transition: transform 0.5s;
    width: 100%;
  }
  a:hover {
    img {
      transform: scale(0.95);
      transition: transform 0.5s;
    }
  }
`;

const ProjectPage = ({ data }) => {
  const page = data.drupal.projectSlug;

  return (
    <Layout>
      <Helmet>
        <title>{page.title} | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={page.metaDescription} />
        <meta
          property="og:description"
          content={page.metaDescription}
        />
        <meta property="og:title" content={page.title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
        <meta property="og:url" content={`https://sanna.ninja/${page.slug}`} />
        <meta property="og:image" content="../images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href={`https://sanna.ninja/${page.slug}`} />

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
        <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
      </Helmet>
      <ProjectHeader>
        <GatsbyImage
          image={getImage(page.decorativeImageFile)} alt="" className="project--decorative"
        />
        {page.decorativeImageCredits ? <ProjectCredits dangerouslySetInnerHTML={{ __html: page.decorativeImageCredits }}></ProjectCredits> : ''}
      </ProjectHeader>
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
              <Link
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              { page.title }
            </li>
          </ul>
        </Breadcrumb>
        <h1 id="skip-target">{ page.title }</h1>
        <div className="project--year">Year: { page.year }</div>

        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>

        <h2>Roles in the project</h2>
        <ul>
          {page.roles.map((role, index) => {
            return (
              <li key={`role-item${index}`}>{ role.name }</li>
            );
          })}
        </ul>

        <h2>Links to the project</h2>
        <LinkWrapper>
          <ul>
            {page.repoLinks.map((repo, index) => {
              return (
                <li key={`repo-item${index}`}>
                  <a
                    href={repo.uri}
                    className="project--repo-link"
                  >
                    {repo.title}
                  </a>
                </li>
              );
            })}
            {page.projectLink.map((project, index) => {
              return (
                <li key={`project-link-item${index}`}>
                  <a
                    href={project.uri}
                    className="project--project-link"
                  >
                    {project.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </LinkWrapper>

        <h2 className="project--tech-title">Technologies</h2>
        <TechWrapper>
          {page.technologies.map((tech, index) => {
            return (
              <TechLogos key={`tech-item${index}`} className={`logo--${tech.name.toLowerCase()}`}>
                <a href={tech.url}>{ tech.name }</a>
              </TechLogos>
            );
          })}
        </TechWrapper>

        <ProjectImageWrapper>
        <h2>Project designs</h2>
          {page.projectImages.map((image, index) => {

            return (
              <a key={`gallery-item-${index}`} data-fancybox="gallery" href={image.url} data-caption={image.alt}>
                <img src={image.thumb} alt={image.alt} />
              </a>
            );
          })}
        </ProjectImageWrapper>
      </MainStyles>
    </Layout>
  );
}

export default ProjectPage;

export const query = graphql`
  query GetProject($slug: String!) {
    drupal {
      projectSlug(slug: $slug) {
        title
        year
        content
        slug
        metaDescription
        technologies {
          id
          name
          url
        }
        roles {
          id
          name
        }
        repoLinks {
          uri
          title
        }
        projectLink {
          title
          uri
        }
        decorativeImageCredits
        decorativeImage
        decorativeImageFile  {
          childImageSharp {
            gatsbyImageData(
              width: 2500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        projectImages {
          url
          thumb
          alt
        }
      }
    }
  }
`;



import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Breadcrumb from '../components/styles/Breadcrumb';

const MainStyles = styled.div`
  padding: 2em 2em;
  margin: 0 auto;
  max-width: 80em;
`;

const SkillContent = styled.div`
.logo-list {
  align-items: center;
  background-color: ${({ theme }) => theme.techBg};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
  margin: 2em 0 3em 0;
  padding-left: 0;
  .logo-list--item a {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50px auto;
    content: '';
    display: block;
    height: 70px;
    margin: 0.5em 0.7em;
    text-indent: -9999px;
    transition: background-size 0.2s ease-in-out;
    width: 70px;
    &:focus {
      outline: 2px dotted #333;
    }
  }

  .logo--drupal a {
    background-image: url('/logos/drupal.svg');
    background-size: 60px auto;
    height: 70px;
    width: 70px;
    &:hover {
      background-size: 65px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--php a {
    background-image: url('/logos/php.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--javascript a {
    background-image: url('/logos/javascript.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--html5 a {
    background-image: url('/logos/html5.svg');
    background-size: auto 50px;
    &:hover {
      background-size: auto 55px;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--css3 a {
    background-image: url('/logos/css3.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--sass a {
    background-image: url('/logos/sass.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--react a {
    background-image: url('/logos/react.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--graphql a {
    background-image: url('/logos/graphql.svg');
    background-size: auto 50px;
    &:hover {
      background-size: auto 55px;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--gatsby a {
    background-image: url('/logos/gatsby.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--next a {
    background-image: url('/logos/nextjs.svg');
    background-size: 60px auto;
    height: 70px;
    width: 70px;
    &:hover {
      background-size: 65px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--vscode a {
    background-image: url('/logos/vscode.svg');
    background-size: 40px auto;
    height: 50px;
    width: 50px;
    &:hover {
      background-size: 45px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
  .logo--git a {
    background-image: url('/logos/git.svg');
    background-size: 40px auto;
    height: 50px;
    width: 50px;
    &:hover {
      background-size: 45px auto;
      transition: background-size 0.2s ease-in-out;
    }
  }
`;

const SkillsTools = ({ data }) => {
  const page = data.drupal.page;

  return (
    <Layout>
      <Helmet>
        <title>Skills and tools | Portfolio - Sanna Mäkinen</title>
        <meta name="Description" content={page.metaDescription} />
        <meta
          property="og:description"
          content={page.metaDescription}
        />
        <meta property="og:title" content="Skills and tools" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
        <meta property="og:url" content="https://sanna.ninja/skills/" />
        <meta property="og:image" content="../images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sanna.ninja/skills/" />
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
        <SkillContent dangerouslySetInnerHTML={{ __html: page.content }}></SkillContent>
      </MainStyles>
    </Layout>
  );
}

export default SkillsTools;

export const query = graphql`
  query GetSkillsTools {
    drupal {
      page(id: 15) {
        title
        content
        metaDescription
      }
    }
  }
`;

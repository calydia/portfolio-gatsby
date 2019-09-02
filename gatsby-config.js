/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Portfolio - Sanna Mäkinen",
    menuLinks: [
      {
        name: "Home",
        link: "/",
        id: "menu-1",
      },
      {
        name: "Work experience",
        link: "/experience",
        id: "menu-2",
      },
      {
        name: "Skills and tools",
        link: "/skills",
        id: "menu-3",
      },
      {
        name: "Education",
        link: "/education",
        id: "menu-4",
      },
      {
        name: "Projects",
        link: "/projects",
        id: "menu-5",
      },
      {
        name: "About me",
        link: "/about-me",
        id: "menu-6",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://portfolio.docker.localhost:8000`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Average Sans", "Rock Salt"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};

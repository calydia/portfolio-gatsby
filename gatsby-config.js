/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
        name: "Education",
        link: "/education",
        id: "menu-2",
      },
      {
        name: "Experience",
        link: "/experience",
        id: "menu-3",
      },
      {
        name: "Projects",
        link: "/projects",
        id: "menu-4",
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
          families: ["Average Sans", "NTR"],
        },
      },
    },
  ],
};

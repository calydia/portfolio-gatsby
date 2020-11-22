/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Portfolio - Sanna Mäkinen",
    siteUrl: `https://sanna.ninja/`,
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://drupal.sanna.ninja/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rock Salt`,
          `Average Sans:400, 700`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NCHXMTX",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio - Sanna Mäkinen",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#0356bc",
        theme_color: "#0356bc",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://sanna.ninja",
        sitemap: "https://sanna.ninja/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Sanna Mäkinen',
    description: 'My portfolio site',
    siteUrl: 'https://sanna.ninja',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        id: 'menu-1',
      },
      {
        name: 'Work Experience',
        link: '/work-experience',
        id: 'menu-2',
      },
      {
        name: 'Skills and tools',
        link: '/skills-and-tools',
        id: 'menu-3',
      },
      {
        name: 'Education',
        link: '/education',
        id: 'menu-4',
      },
      {
        name: 'Projects',
        link: '/projects',
        id: 'menu-5',
      },
      {
        name: 'About me',
        link: '/about-me',
        id: 'menu-6',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icons: [
          {
            "src": "/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/android-chrome-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-16x16.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-32x32.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/maskable.png",
            "sizes": "196x196",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ],
        name: `Portfolio - Sanna Mäkinen`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#BBC9F7`,
        display: `standalone`,
        orientation: `portrait`,
        lang: `eng`
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "DRUPAL",
        fieldName: "drupal",
        url: process.env.BACKEND_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    }
  ],
};

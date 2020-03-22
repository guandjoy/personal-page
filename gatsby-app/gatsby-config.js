require("dotenv").config({
  path: `.env.production`
});

module.exports = {
  siteMetadata: {
    title: `Yurko Turskiy – Web Developer & Designer`,
    siteUrl: `https://yurko.gq/`,
    description: `Designer who code. Into JAMstack, ReactJS, GraphQL, SVG, etc.`,
    author: `@guandjoy`
  },
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: "decks",
        // base path for routes generate by this theme
        basePath: "/decks"
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MKVCSPN",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "Qw8u20CO2fmMYOKFWjvOOA",
        gtmPreview: "env-1"
        // dataLayerName: "demoDataLayer"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["100", "300", "700"],
            subsets: ["latin"]
          },
          {
            family: "Rubik",
            variants: ["300", "400", "500", "700", "900"]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yurko Turskiy. Developer & Designer`,
        short_name: `Yurko's page`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.yurko.gq",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};

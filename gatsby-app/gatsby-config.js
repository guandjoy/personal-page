require("dotenv").config({
  path: `.env.production`
});

module.exports = {
  siteMetadata: {
    title: `Yurko Turskiy. Web Developer & Designer`,
    siteUrl: `https://yurko.gq/`,
    description: `Is there web on Mars?`,
    author: `@guandjoy`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143621800-1"
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

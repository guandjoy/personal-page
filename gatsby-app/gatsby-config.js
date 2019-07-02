module.exports = {
  siteMetadata: {
    title: `Designer & Developer`,
    siteUrl: `https://yurko.gq/`,
    description: `into Visual Arts, Python, ReactJS, and GraphQL.`,
    author: `@guandjoy`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["100", "300", "400", "700"],
            subsets: ["latin"]
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
        name: `Yurko Turskiy personal page`,
        short_name: `Yurko's page`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.yurko.gq",
        policy: [{ userAgent: "*", disallow: "/" }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};

require("dotenv").config({
  path: `.env.production`
});

const sourceS3 = {
  resolve: "gatsby-source-s3-asset",
  options: {
    bucketName: "yurko-personal-page",
    domain: `s3.eu-central-1.amazonaws.com`, // [optional] Not necessary to define for AWS S3; defaults to `s3.amazonaws.com`
    // protocol: "https" // [optional] Default to `https`.
    // publicDomain: `s3.eu-central-1.amazonaws.com`, // [optional] Use this domain to construct the public URL for the assets
    accessKeyId: `${process.env.accessKeyId}`,
    secretAccessKey: `${process.env.secretAccessKey}`
  }
};

module.exports = {
  siteMetadata: {
    title: `Developer & Designer`,
    siteUrl: `https://yurko.gq/`,
    description: `into Visual Arts, Python, ReactJS, and GraphQL.`,
    author: `@guandjoy`
  },
  plugins: [
    sourceS3,
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

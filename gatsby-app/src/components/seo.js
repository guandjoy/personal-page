import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const ogTitle = data.site.siteMetadata.title;
        const ogDescription = "Is there web on Mars?";
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.description}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },

              {
                property: `og:url`,
                content: `https://yurko.netlify.com/`
              },
              {
                property: `og:title`,
                content: ogTitle
              },
              {
                property: `og:description`,
                content: ogDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:image`,
                content: `https://yurko-personal-page.s3.eu-central-1.amazonaws.com/og-1200x630.png`
              },
              {
                property: `og:image:url`,
                content: `https://yurko-personal-page.s3.eu-central-1.amazonaws.com/og-1200x630.png`
              },
              {
                property: `og:image:secure_url`,
                content: `https://yurko-personal-page.s3.eu-central-1.amazonaws.com/og-1200x630.png`
              },
              {
                property: `og:image:type`,
                content: `image/png`
              },
              {
                property: `fb:app_id`,
                content: `642708319634864`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: ogTitle
              },
              {
                name: `twitter:description`,
                content: ogDescription
              },
              {
                name: `twitter:image:src`,
                content: `https://yurko-personal-page.s3.eu-central-1.amazonaws.com/twitter-1200x1200.png`
              }
            ].concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    // <Helmet title={`${title} | ${data.site.siteMetadata.author}`} />
    <Helmet>
      <title>{title} | {data.site.siteMetadata.author}</title>
      <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C5603AQGuGeNNJrcV0w/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=jyUM20CU3q9XTOlF9OyozjhEOW_oBH0DtYSsG7tTZ6Y"></meta>
      <meta property="og:description" content="Front End Web Developer based in Salt Lake City, Utah."></meta>
    </Helmet>
  )
}

export default Head;
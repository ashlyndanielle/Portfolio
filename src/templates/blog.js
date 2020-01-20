import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

// this is just the way it works...you have to 
// export the query and then graphql does some
// magic shit and this query has access to the context
// passed into create page and badabing badaboom
// you have access to your data via props.data
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  const { frontmatter, html } = props.data.markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}
export default Blog;
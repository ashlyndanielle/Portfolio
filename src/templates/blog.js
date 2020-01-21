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
// Query Breakdown ^^
// variable = $variable: datatype (this should match the key in the database
// i.e. key "slug" becomes $slug)
// variable is placed in parenthesis after the query keyword
// after the query starts (i.e. markdownremark) place
// your variable inside of parenthesis (i.e. eq: $slug)
// then finish off your query as normal, you now how dynamic data

// In this query, graphql will grab the variable $slug from the context
// we set up when we created the page in node.  It will then pass
// the response data down as props to the Blog component

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
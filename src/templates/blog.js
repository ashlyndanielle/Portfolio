import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

// this is just the way it works...you have to 
// export the query and then graphql does some
// magic shit and this query has access to the context
// passed into create page and badabing badaboom
// you have access to your data via props.data

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (
      slug: {
        eq: $slug
      }
    ) {
      title
      publishedDate(formatString: "MMM DD, YYYY")
      body {
        json
      }
    }
  }
`
// Query Breakdown ^^
// define the variable ($variable: datatype) this should match the name in the context from 
// the gatsby-node file i.e. "slug" becomes $slug
// variable is defined inside parenthesis after the query keyword
// place your variable where it's needed inside of parenthesis (slug: {eq: $slug})
// finish off your query as normal, you now how dynamic data

// In this query, graphql will grab the variable $slug from the context
// we set up when we created the page in node.  It will then pass
// the response data down as props to the Blog component

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img src={url} alt={alt}/>
      }
    }
  }
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <h4>{publishedDate}</h4>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}
export default Blog;
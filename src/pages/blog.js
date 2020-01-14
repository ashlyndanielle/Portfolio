import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

// Goal: show a list of posts
// 1. query the title and date for each post
// 2. render an ol on the page
// 3. render an li with a nested h2 (title) and p (date) for each post
//    - google: "render array of objects react" if needed
// 4. test your work

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter } = edge.node;
    const { id } = edge.node;
    return (
      <li key={id}>
        <h3>{frontmatter.title}</h3>
        <p>{frontmatter.date}</p>
      </li>
    )
  });


  return (
    <Layout>
      <h2>Blog</h2>
      <ol>
        {blogPosts}
      </ol>
    </Layout>
  )
}

export default BlogPage;


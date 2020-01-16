import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';

// Goal: show a list of posts
// 1. query the title, date and slug for each post
// 2. render an ol on the page
// 3. render an li with a nested h2 (title) and p (date) for each post
//    - google: "render array of objects react" if needed
// 4. link to each new page

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, id, fields } = edge.node;
    return (
      <li key={id}>
        <Link to={`/blog/${fields.slug}`}><h3>{frontmatter.title}</h3></Link>
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


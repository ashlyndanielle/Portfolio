import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';

import blogStyles from './blog.module.scss';

// Goal: show a list of posts
// 1. query the title, date and slug for each post
// 2. render an ol on the page
// 3. render an li with a nested h2 (title) and p (date) for each post
//    - google: "render array of objects react" if needed
// 4. link to each new page

const BlogPage = () => {
  // OLD MARKDOWN QUERY
  // const mdData = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const blogPosts = mdData.allMarkdownRemark.edges.map(edge => {
  //   const { frontmatter, id, fields } = edge.node;
  //   // const publishDate = new Date(frontmatter.date);
  //   return (
  //     <li key={id} className={blogStyles.post}>
  //       <Link to={`/blog/${fields.slug}`}>
  //         <h3>{frontmatter.title}</h3>
  //         <p>{frontmatter.date}</p>
  //       </Link>
  //     </li>
  //   )
  // });

  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate
          order:DESC
        }
      ){
        edges {
          node {
            id
            title
            slug
            publishedDate (
              formatString: "MMM DD[,] YYYY"
            )
          }
        }
      }
    }
  `)

  const contentfulPosts = contentfulData.allContentfulBlogPost.edges.map(edge => {
    const { title, slug, publishedDate, id } = edge.node;
    return (
      <li key={id} className={blogStyles.post}>
        <Link to={`/blog/${slug}`}>
          <h3>{title}</h3>
          <p>{publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <h2>Posts</h2>
      <ol className={blogStyles.posts}>
        {contentfulPosts}
      </ol>
    </Layout>
  )
}

export default BlogPage;


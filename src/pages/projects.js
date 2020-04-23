import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import projectStyles from './styles/projects.module.scss';

const ProjectsPage = () => {

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
              formatString: "MMM DD, YYYY"
            )
          }
        }
      }
    }
  `)

  const contentfulPosts = contentfulData.allContentfulBlogPost.edges.map(edge => {
    const { id, title, slug, publishedDate } = edge.node;
    return (
      <li key={id} className={projectStyles.post}>
        <Link to={`/projects/${slug}`}>
          <h3>{title}</h3>
          <p>{publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <Head title="Projects" />
      <h2>Projects</h2>
      <ol className={projectStyles.posts}>
        <li className={projectStyles.post}>
          <Link to={`/projects/cssChallenge`}>
            <h3>100 Days of CSS</h3>
            <p>Spring 2020 - Present</p>
          </Link>
        </li>
        {/* {contentfulPosts} */}
      </ol>
    </Layout>
  )
}

export default ProjectsPage;


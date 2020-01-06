import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  let year = new Date();
      year = year.getFullYear();
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
    <footer>
      <br/>
      <p>Created by {data.site.siteMetadata.author} © {year}</p>
    </footer>
  )
};

export default Footer;
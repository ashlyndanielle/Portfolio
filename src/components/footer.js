import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import footerStyles from './footer.module.scss';

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
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} © {year}</p>
    </footer>
  )
};

export default Footer;
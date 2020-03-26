import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import footerStyles from './styles/footer.module.scss';

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
      <h5>Built by {data.site.siteMetadata.author} | {year}</h5>
    </footer>
  )
};

export default Footer;
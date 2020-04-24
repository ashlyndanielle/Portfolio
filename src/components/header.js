import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './styles/header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContent}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
          </li>
          <li>
            <Link to="/projects" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Projects</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
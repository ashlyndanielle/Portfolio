import React from 'react';

import Header from './header';
import Footer from './footer';

import '../styles/index.scss';
import '../styles/styleguide.scss';
import layoutStyles from './styles/layout.module.scss';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.wrapper}>
        <div className={layoutStyles.content}>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
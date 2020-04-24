import React from 'react';

import Header from './header';
import Footer from './footer';

import '../styles/index.scss';
import '../styles/styleguide.scss';
import layoutStyles from './styles/layout-fullwidth.module.scss';

const LayoutFullwidth = props => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.wrapper}>
        <div className={layoutStyles.content}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutFullwidth;
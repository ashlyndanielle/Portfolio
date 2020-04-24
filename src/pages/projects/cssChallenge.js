import React from 'react';
import { Link } from 'gatsby';

import challengeStyles from '../styles/cssChallenge.module.scss';

import LayoutFullwidth from '../../components/layout-fullwidth';
import Head from '../../components/head';

import BlinkingEye from '../../components/cssChallenges/blinkingEye';
import FlipflopHover from '../../components/cssChallenges/flipflopHover';

const CssChallenge = () => {
  return (
    <LayoutFullwidth>
      <Head title="100 Days of CSS"/>
      <Link to={'/projects'}>
        <p className={challengeStyles.breadcrumb}>&#8592; Projects</p>
      </Link>
      <h1>100 Days of CSS</h1>
      <p>Challenges courtesy of <a href="https://100dayscss.com/" target="_blank" rel="noopener noreferrer">100dayscss.com</a></p>
      <div className={challengeStyles.container}>
        <BlinkingEye/>
        <FlipflopHover/>
      </div>
    </LayoutFullwidth>
  )
}

export default CssChallenge;
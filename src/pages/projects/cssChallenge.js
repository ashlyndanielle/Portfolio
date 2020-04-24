import React from 'react';
import { Link } from 'gatsby';

import challengeStyles from '../styles/cssChallenge.module.scss';

import Layout from '../../components/layout';
import Head from '../../components/head';

import BlinkingEye from '../../components/cssChallenges/blinkingEye';

const CssChallenge = () => {
  return (
    <Layout>
      <Head title="100 Days of CSS"/>
      <Link to={'/projects'}>
        <p className={challengeStyles.breadcrumb}>&#8592; Projects</p>
      </Link>
      <h1>100 Days of CSS Challenge</h1>
      <p>Challenges curtosy of <a href="https://100dayscss.com/" target="_blank" rel="noopener noreferrer">100dayscss.com</a></p>
      <div className={challengeStyles.container}>
        <BlinkingEye/>
      </div>
    </Layout>
  )
}

export default CssChallenge;
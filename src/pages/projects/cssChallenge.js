import React from 'react';
import { Link } from 'gatsby';

import challengeStyles from '../styles/cssChallenge.module.scss';

import LayoutFullwidth from '../../components/layout-fullwidth';
import Head from '../../components/head';

import Day1 from '../../components/cssChallenges/day1';
import Day2 from '../../components/cssChallenges/day2';
import Day3 from '../../components/cssChallenges/day3';

const CssChallenge = () => {
  return (
    <LayoutFullwidth>
      <Head title="100 Days of CSS"/>
      <section className={challengeStyles.heading}>
        <Link to={'/projects'}>
          <p className={challengeStyles.breadcrumb}>&#8592; Projects</p>
        </Link>
        <h1>100 Days of CSS</h1>
        <p>Challenges courtesy of <a href="https://100dayscss.com/" target="_blank" rel="noopener noreferrer">100dayscss.com</a></p>
      </section>
      <div className={challengeStyles.container}>
        <Day1/>
        <Day2/>
        <Day3/>
      </div>
    </LayoutFullwidth>
  )
}

export default CssChallenge;
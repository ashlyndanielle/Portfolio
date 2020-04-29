import React from 'react';
import { Link } from 'gatsby';

import challengeStyles from '../styles/cssChallenge.module.scss';

import LayoutLargewidth from '../../components/layout-largewidth';
import Head from '../../components/head';

import Day1 from '../../components/cssChallenges/day1';
import Day2 from '../../components/cssChallenges/day2';
import Day3 from '../../components/cssChallenges/day3';
import Day4 from '../../components/cssChallenges/day4';
import Day5 from '../../components/cssChallenges/day5';
import Day6 from '../../components/cssChallenges/day6';

const CssChallenge = () => {
  return (
    <LayoutLargewidth>
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
        <Day4/>
        <Day5/>
        <Day6/>
      </div>
    </LayoutLargewidth>
  )
}

export default CssChallenge;
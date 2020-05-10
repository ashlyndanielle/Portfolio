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
import Day7 from '../../components/cssChallenges/day7';
import Day8 from '../../components/cssChallenges/day8';
import Day9 from '../../components/cssChallenges/day9';

const CssChallenge = () => {
  
  const frameComponents = [Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9];
  const frames = frameComponents.map(component => {
    let Frame = component;
    return <Frame />
  })

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
        {frames}
      </div>
    </LayoutLargewidth>
  )
}

export default CssChallenge;
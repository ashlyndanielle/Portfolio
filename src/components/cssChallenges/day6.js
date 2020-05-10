import React from 'react';
// https://100dayscss.com/?dayIndex=72

import day6Styles from './styles/day6.module.scss';

const Day6 = () => {
  return (
    <article className={day6Styles.frame}>
      <div className={day6Styles.carousel}>
        <p>I am</p>
        <div className={day6Styles.rotateContainer}>
          <ul>
            <li>a web developer</li>
            <li>a dog person</li>
            <li>a book nerd</li>
            <li>adventurous</li>
            <li>passionate</li>
            <li>a web developer</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Day6;
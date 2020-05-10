import React from 'react';
// https://100dayscss.com/?dayIndex=85

import day8Styles from './styles/day8.module.scss';

const Day8 = () => {
  return (
    <article className={day8Styles.frame}>
      <div className={day8Styles.cradle}>
        <div className={day8Styles.sphere}></div>
        <div className={day8Styles.sphere}></div>
        <div className={day8Styles.sphere}></div>
        <div className={day8Styles.sphere}></div>
        <div className={day8Styles.sphere}></div>
      </div>
    </article>
  )
}

export default Day8;
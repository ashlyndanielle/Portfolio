import React from 'react';

import day9Styles from './styles/day9.module.scss';

const Day9 = () => {
  return (
    <article className={day9Styles.frame}>
      <div className={day9Styles.ruby}>
        <div className={day9Styles.top}>
          <div className={day9Styles.top_farLeft}></div>
          <div className={day9Styles.top_left}></div>
          <div className={day9Styles.top_middle}></div>
          <div className={day9Styles.top_right}></div>
          <div className={day9Styles.top_farRight}></div>
        </div>
        <div className={day9Styles.bottom}>
          <div className={day9Styles.bottom_left}></div>
          <div className={day9Styles.bottom_middle}></div>
          <div className={day9Styles.bottom_right}></div>
        </div>
      </div>
    </article>
  )
}

export default Day9;
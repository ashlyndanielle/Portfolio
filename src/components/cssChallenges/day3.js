import React from 'react';

import day3Styles from './styles/day3.module.scss';

const Day3 = () => {
  return (
    <section className={day3Styles.frame}>
      <div className={day3Styles.center}>
        <input type="checkbox" id="start" name="start" className={day3Styles.start} />
        <label htmlFor="start" className={day3Styles.startLabel}></label>
        <svg height="100" width="100">
          <circle cx="50%" cy="50%" r="47" className={day3Styles.circle} />
        </svg>
        <div className={day3Styles.icon}>
          <div className={day3Styles.mic}>
            <div className={day3Styles.bubble}></div>
          </div>
          <div className={day3Styles.stem}></div>
          <div className={day3Styles.foot}></div>
        </div>
        <div className={day3Styles.dots}>
          <div className={day3Styles.dotOne}></div>
          <div className={day3Styles.dotTwo}></div>
          <div className={day3Styles.dotThree}></div>
        </div>
      </div>
    </section>
  )
}

export default Day3;
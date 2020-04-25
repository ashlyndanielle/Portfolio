import React from 'react';
// https://100dayscss.com/?dayIndex=68

import day1Styles from './styles/day1.module.scss';

const Day1 = () => {
  return (
    <section className={day1Styles.frame}>
      <div className={day1Styles.eyelid}></div>
      <div className={day1Styles.eye}>
        <div className={day1Styles.eyeball}>
          <div className={day1Styles.iris}>
            <div className={day1Styles.pupil}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Day1;
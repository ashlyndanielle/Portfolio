import React from 'react';
// https://100dayscss.com/?dayIndex=63

import day2Styles from './styles/day2.module.scss';

const Day2 = () => {
  return (
    <div className={day2Styles.frame}>
      <div className={day2Styles.center}>
        <div className={day2Styles.flipflop}>Hover Me</div>
      </div>
    </div>
  )
}

export default Day2;
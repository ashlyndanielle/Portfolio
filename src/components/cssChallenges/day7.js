import React from 'react';

import day7Styles from './styles/day7.module.scss';

const Day7 = () => {
  return (
    <article className={day7Styles.frame}>
      <div className={day7Styles.book}>
        <div className={day7Styles.binding}>
            <p>JUDGE THIS BOOK</p>
        </div>
        <h1 className={day7Styles.title}>JUDGE THIS BOOK</h1>
        <span className={day7Styles.byline}>By Its Cover</span>
        <div className={day7Styles.ribbon}></div>
      </div>
    </article>
  )
}

export default Day7;
import React from 'react';
// https://100dayscss.com/?dayIndex=73

import day5Styles from './styles/day5.module.scss';

const Day5 = () => {
  return (
    <article className={day5Styles.frame}>
      <form className={day5Styles.listContainer}>
        <input className={day5Styles.input} type="radio" id="one" name="number" value="30"/>
        <label className={day5Styles.selector} htmlFor="one">1</label>
        <input className={day5Styles.input} type="radio" id="two" name="number" value="60"/>
        <label className={day5Styles.selector} htmlFor="two">2</label>
        <input className={day5Styles.input} type="radio" id="three" name="number" value="100"/>
        <label className={day5Styles.selector} htmlFor="three">3</label>
        <input className={day5Styles.input} type="radio" id="four" name="number" value="100"/>
        <label className={day5Styles.selector} htmlFor="four">4</label>
      </form>
    </article>
  )
}

export default Day5;
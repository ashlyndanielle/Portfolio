import React from 'react';

import styles from './styles/blinkingEye.module.scss';

const BlinkingEye = () => {
  return (
    <section className={styles.frame}>
      <div className={styles.eyelid}></div>
      <div className={styles.eye}>
        <div className={styles.eyeball}>
          <div className={styles.iris}>
            <div className={styles.pupil}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlinkingEye;
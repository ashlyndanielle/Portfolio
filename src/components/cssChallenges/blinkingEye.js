import React from 'react';

import eyeStyles from './styles/blinkingEye.module.scss';

const BlinkingEye = () => {
  return (
    <section className={eyeStyles.frame}>
      <div className={eyeStyles.eyelid}></div>
      <div className={eyeStyles.eye}>
        <div className={eyeStyles.eyeball}>
          <div className={eyeStyles.iris}>
            <div className={eyeStyles.pupil}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlinkingEye;
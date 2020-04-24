import React from 'react';

import hoverStyles from './styles/flipflopHover.module.scss';

const FlipflopHover = () => {
  return (
    <div className={hoverStyles.frame}>
      <div className={hoverStyles.center}>
        <div className={hoverStyles.flipflop}>Hover Me</div>
      </div>
    </div>
  )
}

export default FlipflopHover;
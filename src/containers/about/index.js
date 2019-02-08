import React from 'react'
import './styles.css'

import poster from './images/poster-2.png'

export default () => (
  <div className="about">
    <div className="about-content">
      <p className="about__text">
        A skin'te myachik, byd' laska!
      </p>
      <img alt="poster" src={poster}/>
      <h1>
        Let the battle begin
      </h1>
    </div>
  </div>
)


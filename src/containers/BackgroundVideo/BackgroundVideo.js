import React from 'react';
import './styles.css'
import video from './video.mp4'
export const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="background-video__content">
        South park
      </div>
    </div>
  )
};
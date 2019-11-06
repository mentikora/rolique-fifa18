import React from 'react';
import './styles.css'
import * as video from './video.mp4'
import { Logo } from '../../components/index'

export const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video loop autoPlay muted>
        <source src={`${video}`} type="video/mp4" />
      </video>
      <div className="background-video__content">
        <Logo />
      </div>
    </div>
  )
};
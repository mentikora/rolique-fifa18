import React from 'react'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'
import './styles.css'
export default () => (
  <div className='twitch-stream-wrapper'>
    <div className='twitch-stream-block'>
      <ReactTwitchEmbedVideo channel='Castro_1021' layout='video' />
      {/* spamforhope */}
    </div>
  </div>
)

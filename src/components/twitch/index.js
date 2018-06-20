import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import './styles.css';

export default () => (
  <div className="twitch-stream-wrapper">
    <div className="twitch-stream-block">
      <ReactTwitchEmbedVideo channel="spamforhope" layout="video" />
    </div>
  </div>
);

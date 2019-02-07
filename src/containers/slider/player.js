import React from 'react';

export default ({name, nickname, team, position, image}) => {
  return (
    <div
      className="player"
    >
      <span className="player__team">
        {team}
      </span>
      <p className="player__flex">
        <span className="player__name">
          {name}
        </span>
        <span className="player__nickname">{nickname}</span>
      </p>
    </div>
  )
}

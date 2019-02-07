import React from 'react';

export default ({name, nickname, team, image: { front, back }}) => {
  return (
    <div className="player">
      <span className="player__team">
        {team}
      </span>
      <p className="player__flex">
        <span className="player__name">
          {name}
        </span>
        <span className="player__nickname">{nickname}</span>
      </p>
      <div className="player__image">
        <div className="player__image--front">
          <img src={front} alt={name} />
        </div>
        <div className="player__image--back">
          <img src={back} alt={name} />
        </div>
      </div>
    </div>
  )
}

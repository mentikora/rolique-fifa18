import React from 'react'
import './style.css'
import * as mrmackey from './images/mrmackey.png'
// import * as mmkay from './sound/mkay.mp3'

export const Board: React.FunctionComponent<{}> = () => {
  const audio = new Audio('./sound/mkay.mp3')
  return (
    <div className="board">
      <ul>
        <li>
          1. Group stage - all teams allowed
        </li>
        <li>
          2. Second stage - allowed teams only with 4.5 stars and below
        </li>
        <li>
          3. Final stage
        </li>
      </ul>
      <img
        className="mrMakey"
        src={`${mrmackey}`}
        alt="Mr.Mackey"
        // onClick={() => audio.play}
      />
    </div>
  )
}
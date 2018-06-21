import React from 'react';
import { Route } from "react-router-dom";

import Twitch from '../twitch';
import News from '../news';
import Player from '../player';
import './styles.css';


const TabContent = () => (
  <div className="tab-content">
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/players" component={ Players } />
    {/* <Route path="/bracket" component={ () => <Bracket playersData={playersData} /> } /> */}
    <Route path="/rules" component={ Rules } />
  </div>
)

const Homepage = () => (
  <div>
    <Twitch />
    <News />
  </div>
)

const Players = () => (
  <div>
    <div>
      <Player />
    </div>
    <div className="sponsors">
      <h2>
        General sponsors
      </h2>
      <ul>
        <li>
          2 pizdylinu from Vasya
        </li>
        <li>
          Coach Tolique
        </li>
        <li>
          Vegetarian cafe "Dich West"
        </li>
      </ul>
    </div>
  </div>
);

const Rules = () => (
  <div>
    <div className="block">
      <ul>
        <li>
          <h3>
            Match rules & Tournament format
          </h3>
          <ul>
            <li>
              The Team who plays 'home' is responsible for starting a match. They also making first pick
            </li>
            <li>
              Each Player will have 2-3 minutes to configure controls
            </li>
            <li>
              In all situations possible, tournament referees will monitor the game situation so that it may be restored in the event of game interruptions.
            </li>
            <li>
              If a Player has an issue that they feplayer is creating an unfair advantage for the opponent, they must pause the game, (or request their opponent pause the game) and bring the issue to the attention of the referee. The referee will address the issue. Referee - rolique team.
            </li>
            <li>
              No team mirrors.
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Game interruptions and pauses
          </h3>
          <ul>
            <li>
              Each Team can pause the game up to five times. If a Team pauses the game, it must be to make a tactical change to their squad, which can include substitutions, formation changes, or tactic adjustments.
            </li>
            <li>
              Team are only allowed to pause the game when the ball is not in play, meaning it has left the fiplayerd of play or a foul has been committed and it’s a dead ball situation, or if the Team holds possession of their ball in their half of the fiplayerd.
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Specific game settings
          </h3>
          <ul>
            <li>
              Match duration: 12 minutes (6 minutes per half)
            </li>
            <li>
              Game speed: Normal
            </li>
            <li>
              Level: Legendary
            </li>
            <li>
              Stats: all teams have 85 rating score
            </li>
            <li>
              All matches should be played by a ´Friendly Match´
            </li>
            <li>
              Only tactical defense is allowed
            </li>
            <li>
              It´s forbidden to use custom formations, only the standard formations are allowed to use
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default TabContent;
import React from 'react';
import './styles.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Tabs = () => (
  <Router>
    <div className="tabs container">
      <nav>
        <ul className="tabs__list">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/bracket">Bracket</Link>
          </li>
          <li>
            <Link to="/participants">Participants</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={ Overview } />
      <Route path="/bracket" component={ Bracket } />
      <Route path="/participants" component={ Participants } />
      <Route path="/rules" component={ Rules } />
    </div>
  </Router>
);

const Overview = () => (
  <div>
    <div className="block">
      Overview
    </div>
  </div>
);

const Bracket = () => (
  <div>
    <div className="block">
      Bracket
    </div>
  </div>
);

const Participants = () => (
  <div>
    <div className="block">
      Participants
    </div>
  </div>
);

const Rules = () => (
  <div>
    <div className="block">
      <ul>
        <li>
          <h3>
            MATCH RULES & TOURNAMENT FORMAT 
          </h3>
          <ul>
            <li>
              Players not present at the designated start time for any match will be disqualified, and their opponent shall be granted a 3-0 score.
            </li>
            <li>
              Each Player will have 2-3 minutes to configure controls
            </li>
            <li>
              In all situations possible, tournament referees will monitor the game situation so that it may be restored in the event of game interruptions.
            </li>
            <li>
              If a Player has an issue that they feel is creating an unfair advantage for the opponent, they must pause the game, (or request their opponent pause the game) and bring the issue to the attention of the referee. The referee will address the issue. Referee - rolique team.
            </li>
          </ul>
        </li>
        <li>
          <h3>
            GAME INTERRUPTIONS AND PAUSES
          </h3>
          <ul>
            <li>
              Each Team can pause the game up to five times. If a Team pauses the game, it must be to make a tactical change to their squad, which can include substitutions, formation changes, or tactic adjustments.
            </li>
            <li>
              Team are only allowed to pause the game when the ball is not in play, meaning it has left the field of play or a foul has been committed and it’s a dead ball situation, or if the Team holds possession of their ball in their half of the field.
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Specific game settings
          </h3>
          <ul>
            <li>
              <h4>
                General
              </h4>
              <ul>
                <li>Match durance: 12 minutes (6 minutes per half)</li>
                <li>Game speed: Normal</li>
              </ul>
            </li>
            <li>
              All matches should be played by a ´Friendly Match´
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default Tabs;
import React from 'react';
import './styles.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const playersData = [
  {
    name: 'Anton',
    surname: 'Yatseniuk',
    nickname: 'Batya',
    image: 'img/anton.png',
    position: 'FEdev',
    role: 'Cristiano Ronaldo',
    align: 'left',
    pros: 'dribling, situation on the field'
  },
  {
    name: 'Volodymyr',
    surname: 'Paskiv',
    nickname: 'YaPridymav',
    image: 'img/vova.png',
    position: 'BEdev',
    role: 'Lionel Messi',
    align: 'right',
    pros: 'dribling (no), pass'
  },
  {
    name: 'Roman',
    surname: 'Malec',
    nickname: 'RapGod',
    image: 'img/malec.png',
    position: 'BEdev',
    role: 'Neymar da Silva Santos Júnior',
    align: 'left',
    pros: 'game knowledge, free kick'
  },
  {
    name: 'Igor',
    surname: 'Semenyuk',
    nickname: 'Schleunigalover',
    image: 'img/igor.png',
    position: 'BEdev',
    role: 'Paulo Dybala',
    align: 'right',
    pros: 'Italy teams, corners'
  },
  {
    name: 'Vladyslav',
    surname: 'Bilyi',
    nickname: 'PHP>all',
    image: 'img/vlad.png',
    position: 'BEdev',
    role: 'Olivier Giroud',
    align: 'left',
    pros: 'runs, pass'
  },
  {
    name: 'Markiian',
    surname: 'Linynskyi',
    nickname: 'borschtsch',
    image: 'img/markiyan.png',
    position: 'FEdev',
    role: 'Leroy Sane',
    align: 'right',
    pros: 'long pass, flank'
  },
  {
    name: 'Nazar',
    surname: 'Vasylyshyn',
    nickname: 'walldestroyer',
    image: 'img/nazar.png',
    position: 'design',
    role: 'Harry Kane',
    align: 'left',
    pros: 'positioning, dribling'
  },
  {
    name: 'Roman',
    surname: 'Horobets',
    nickname: 'css4food',
    image: 'img/horo.png',
    position: 'FEdev',
    role: 'Andriy Pyatov',
    align: 'right',
    pros: 'defence, flank'
  }
];

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
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/highlights">Highlights</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={ Overview } />
      <Route path="/bracket" component={ Bracket } />
      <Route path="/rules" component={ Rules } />
      <Route path="/highlights" component={ Highlights } />
    </div>
  </Router>
);

const Overview = () => (
  <div>
    <div className="players_wrapper">
      {
        playersData.map( (player, key) => (
          <div className={`player player-${player.align} player-${key}`} key={key}>
            <div className="player__image">
              <img src={player.image}/>
            </div>
            <div className="player__content">
              <span>
                {player.role}
                <span className="divider">/</span>
                {player.position}
              </span>
              <h2 className="player__name">
                {player.name}
                <span className="player__nickname">
                  `{player.nickname}`
                </span>
                {player.surname}
              </h2>
              <div>
                <div className="player__pros">
                  Pros: {player.pros}
                </div>
              </div>
            </div>
          </div>
        ))
      }
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

const Bracket = () => (
  <div>
    <div className="bracket-wrapper">

      <div className="bracket-row">
        <h4>Qualification</h4>
        <div className="bracket-cell">
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              Yatseniuk / Paskiv
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2 | p(4)</span>
            </div>
          </div>
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              Semenyuk / Vasylyshyn
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2 | p(5)</span>
            </div>
          </div>
        </div>

        <div className="bracket-cell">
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
        </div>

      </div>

      <div className="bracket-row">
        <h4>III-IV place</h4>
        <div className="bracket-cell">
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bracket-row">
        <h4>I-II place</h4>
        <div className="bracket-cell">
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              team name
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

const Highlights = () => (
  <div className="block">
    <iframe 
      src="//coub.com/embed/10uvl3?muted=false&autostart=false&originalSize=false&startWithHD=false" 
      width="600" 
      height="400" 
      allow="autoplay" 
      />
  </div>
)

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

export default Tabs;
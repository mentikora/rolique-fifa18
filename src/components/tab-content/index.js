import React from 'react';
import { Route } from "react-router-dom";

// import Twitch from '../twitch';
import Rules from '../rules';
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
    {/* <Twitch /> */}
    <News />
  </div>
)

const Players = () => (
  <div>
    <Player />
  </div>
);

export default TabContent;
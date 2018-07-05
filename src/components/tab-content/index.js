import React from 'react'
import { Route } from 'react-router-dom'
// import Twitch from '../twitch';
import Rules from '../rules'
import News from '../news'
import Player from '../player'
import LatestMatches from '../latest-matches'
import './styles.css'
const TabContent = () => (
  <div className='tab-content'>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/players' component={Players} />
    {/* <Route path="/bracket" component={() => <Bracket playersData={playersData} />} /> */}
    <Route path='/rules' component={Rules} />
  </div>
)
const Homepage = () => (
  <div className='homepage-content'>
    {/* <Twitch /> */}
    <News />
    <LatestMatches />
  </div>
)
const Players = () => (
  <div>
    <Player />
  </div>
)
export default TabContent

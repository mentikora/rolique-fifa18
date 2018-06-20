import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Info from './components/info';
import Tabs from './components/tabs';
import TabContent from './components/tab-content';
import Twitch from './components/twitch';
import News from './components/news';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div className="page-layout">
            <Info />
            <Tabs /> 
            <Twitch />
            <News />
            <TabContent />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

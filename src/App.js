import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Info from './components/info';
import Tabs from './components/tabs';
import TabContent from './components/tab-content';
import Sponsors from './components/sponsors';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div className="page-layout">
            <Info />
            <Tabs /> 
            <TabContent />
            <Sponsors />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

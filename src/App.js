import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import WebFont from 'webfontloader';
import Info from './components/info';
import Tabs from './components/tabs';
import TabContent from './components/tab-content';

import './styles.css';

WebFont.load({
  google: {
    families: ['Encode+Sans+Condensed:300,400,600']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div className="page-layout">
            <Info />
            <Tabs /> 
            <TabContent />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

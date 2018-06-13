import React, { Component } from 'react';
import Header from './components/header';
import Tabs from './components/tabs';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Tabs />

      </div>
    );
  }
}

export default App;

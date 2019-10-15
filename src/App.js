import React, { Component } from 'react'
import './styles.css'
import { BackgroundVideo } from './containers/index';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <BackgroundVideo />
        </div>
      </div>
    )
  }
}

export default App


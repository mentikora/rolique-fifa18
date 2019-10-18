import React, { Component } from 'react'
import './styles.css'
import { BackgroundVideo } from './containers/index';
import { Section } from './components/index'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <BackgroundVideo />
          <Section />
        </div>
      </div>
    )
  }
}

export default App


import React, { Component } from 'react'
import './styles.css'

import Parallax from './containers/parallax/parallax'
import About from './containers/about/index'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <Parallax />
          <About />
        </div>
      </div>
    )
  }
}

export default App


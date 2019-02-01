import React, { Component } from 'react'
import './styles.css'

import RSlider from './containers/slider'
import Parallax from './containers/parallax/parallax'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <Parallax />
          <RSlider />
        </div>
      </div>
    )
  }
}

export default App

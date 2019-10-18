import React, { Component } from 'react'
import { BackgroundVideo } from './containers/index';
import { Section, Board } from './components/index'
import './styles.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <BackgroundVideo />
          <Section
            pre="pre"
            title="title"
            sectionName="rules"
            color="red"
          >
            <Board />
          </Section>
        </div>
      </div>
    )
  }
}

export default App


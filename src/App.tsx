import React, { Component } from 'react'
import { BackgroundVideo } from './containers/index';
import {
  Section,
  TextHeading,
  CartoonCharacter
} from './components/index'
import './styles.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <BackgroundVideo />
          <Section sectionName="rules" bgColor="#606C53">
            <div>
              <TextHeading pre="mr. Makey's" title="rules" />
              <ul>
                <li>
                  Group stage - all teams allowed
                </li>
                <li>
                  Second stage - allowed teams only with 4.5 stars and below
                </li>
                <li>
                  Final stage
                </li>
              </ul>
            </div>
            <CartoonCharacter image="mrmackey" alt="mr.Mackey"/>
          </Section>
          <Section sectionName="lastChampions" bgColor="blue">
            <div>
              <TextHeading pre="PC Principal" title="Champions" />
              <ul>
                <li>
                  Group stage - all teams allowed
                </li>
                <li>
                  Second stage - allowed teams only with 4.5 stars and below
                </li>
                <li>
                  Final stage
                </li>
              </ul>
            </div>
            <CartoonCharacter width={250} image="pcprincipal" alt="PC Principal"/>
          </Section>
        </div>
      </div>
    )
  }
}

export default App

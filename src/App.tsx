import React, { Component } from 'react'
import { BackgroundVideo } from './containers/index';
import {
  Section,
  TextHeading,
  CartoonCharacter,
  Imaginarium
} from './components/index'
import './styles.css'

import r from './img/giphy.webp'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='page-layout'>
          <BackgroundVideo />
          <Section sectionName="motivation" bgColor="white">
            <div>
              <TextHeading pre="PC Principal" title="Motivation" />
              <p>
              Playing video games is a very popular way of spending free time. It is currently one of the most widespread sources of entertainment, regardless of one's culture, age and gender. According to estimates, there are about 2.2 billion gamers in the world, and global industry revenue generated about $108 billion in 2017 by the sale of video games and gaming equipment. With the increasing number of users the potential effects of video games have been continually debated. A number of studies address the potential benefits of playing video games, such as cognitive, motivational, emotional, and social.
              </p>
            </div>
            <CartoonCharacter width={250} image="pcprincipal" alt="PC Principal"/>
          </Section>
          <Section sectionName="rules" bgColor="#606C53">
            <div>
              <TextHeading pre="mr. Makey's" title="rules" />
              <ul>
                <li>
                 It is forbidden to play a team more than 2 times in a row
                </li>
                <li>
                  Group stage - all teams allowed
                </li>
                <li>
                  Second stage - allowed teams only with 4.5 stars and below
                </li>
                <li>
                  Final stage - pick up the cup from Vlad
                </li>
              </ul>
            </div>
            <CartoonCharacter image="mrmackey" alt="mr.Mackey"/>
          </Section>
          <Section fullsize={true} sectionName="photos" bgColor="white">
            <div className="container text-center">
              <TextHeading pre="Randy's" title="Shots" />
              <CartoonCharacter image="randy" alt="Randy Marshal"/>
              <p>
                I am Lorde! Ya ya ya, I Am Lorde, I am Lorde!
              </p>
            </div>
            <Imaginarium />
          </Section>
          <footer className="footer">
            <img src={r} alt='...' />
            <div />
            <p>
              Put the soft stuff away and hard stuff in.
            </p>
            <TextHeading pre="Join Rolique eSport" title="Today" />
          </footer>
        </div>
      </div>
    )
  }
}

export default App

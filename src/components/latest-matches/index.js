import React, { Component } from 'react'
import './styles.css'
import Loader from '../loader'
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'l5wqt7w3yse5',
  accessToken: '805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0'
})
class LatestMatches extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: null
    }
  }
  componentDidMount () {
    // order: '-sys.createdAt' returns reversed ordered list
    client.getEntries({content_type: 'latestMatches', order: '-sys.createdAt'})
      .then((response) => this.setState(
        { response: response.items }
      ))
      .then((response) => console.log(this.state.response))
      .catch(console.error)
  }
  render () {
    return (
      <div className='latest-matches-wrapper'>
        {
          !this.state.response ? <Loader /> : <div className='latest-matches-content'>
            {
              this.state.response.map(match => (
                <div
                  key={match.fields.id}
                  className='match'
                >
                  <p className='match__date'>
                    {match.fields.date}
                  </p>
                  <div className='match-team match-team--first'>
                    {
                      !match.fields.team1name.fields.currentTeamLogo ? null : <img
                        className='match-team__logo'
                        src={match.fields.team1name.fields.currentTeamLogo.fields.file.url}
                        alt={match.fields.team1name.fields.currentTeam}
                      />
                    }
                    <span className='match-team__name'>
                      {match.fields.team1name.fields.currentTeam}
                    </span>
                    <span className='match-team__score'>
                      {match.fields.team1score}
                    </span>
                  </div>
                  <div className='match-team match-team--second'>
                    <span className='match-team__score'>
                      {match.fields.team2score}
                    </span>
                    <span className='match-team__name'>
                      {match.fields.team2name.fields.currentTeam}
                    </span>
                    {
                      !match.fields.team2name.fields.currentTeamLogo ? null : <img
                        className='match-team__logo'
                        src={match.fields.team2name.fields.currentTeamLogo.fields.file.url}
                        alt={match.fields.team2name.fields.currentTeam}
                      />
                    }
                  </div>
                </div>
              ))
            }
          </div>
        }
      </div>
    )
  }
}
export default LatestMatches

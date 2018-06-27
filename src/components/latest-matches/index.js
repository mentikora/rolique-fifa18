import React, { Component } from 'react';
import './styles.css';

import Loader from '../loader';

const contentful = require("contentful");
const client = contentful.createClient({
  space: "l5wqt7w3yse5",
  accessToken: "805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0"
});

class LatestMatches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  componentDidMount = () => {
    client.getEntries({content_type: 'latestMatches'})
      .then((response) => this.setState(
        { response: response.items }
      ))
      .catch(console.error)
  }
  
  render() {
    return(

      <div className="latest-matches-wrapper">

          {
            this.state.response === null
            ?
            <Loader />
            :
            <div>
              {
                console.log(this.state.response)
              }
              {
                this.state.response.map( match => (
                  <div 
                    key={ match.fields.id }
                    className={`match ${match.fields.matchOfTheDay === true ? ' match--oftheday' : ''}`}
                  >
                    <p className="match__date">
                      { match.fields.date } 
                    </p>
                    <div className="match-team match-team--first">
                      <span className="match-team__name">
                        { match.fields.team1name.fields.name }
                      </span>
                      <span className="match-team__score">
                        { match.fields.team1score }
                      </span>
                    </div>
                    <div className="match-team match-team--second">
                      <span className="match-team__score">
                        { match.fields.team2score }
                      </span>
                      <span className="match-team__name">
                        { match.fields.team2name.fields.name }
                      </span>
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

export default LatestMatches;
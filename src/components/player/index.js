import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import './styles.css';

const contentful = require("contentful");
const client = contentful.createClient({
  space: "l5wqt7w3yse5",
  accessToken: "805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0"
});

const data = {
  labels: ['PAC', 'SHO', 'BASIC', 'DRI', 'DEF', 'PHY'],
  datasets: [
    {
      label: 'Attributes',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#d9381f',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55]
    }
  ]
};

class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  componentDidMount = () => {
    client.getEntries()
      .then((response) => this.setState(
        { response: response.items.sort( (a, b ) => a.fields.id - b.fields.id  ) }
      ))
      .catch(console.error)
  }

  render() {
    return (
      <div className="players_wrapper">
        {
          this.state.response === null 
          ? 
          'Loading...' 
          :
          this.state.response.map( (player, key) => (
            <div 
              key={ key } 
              className="player"
            >
              <div 
                className="player__image"
                style={{ backgroundImage: `url(${player.fields.imageBackground.fields.file.url})` }}
              >
                {
                  player.fields.image 
                  ? 
                  <img src={ player.fields.image.fields.file.url } />
                  :
                  null
                }
              </div>
              <div className="player__content">
                <span>
                  { player.fields.role }
                  <span className="divider">/</span>
                  { player.fields.position }
                </span>
                <h2 className="player__name">
                  { player.fields.name } {player.fields.surname}
                </h2>
                <span className="player__nickname">
                  `{ player.fields.nickname }`
                </span>
                <div>
                  {
                    player.fields.pros 
                    ? 
                    <div className="player__pros">
                      Pros: {player.fields.pros}
                    </div>
                    : 
                    null 
                  }
                </div>
              </div>
              <div className="player__content-data">
                <Radar data={data} />
              </div>
            </div>

            
          )) 
        }
        {
              console.log(this.state.response)
            }
      </div>

    )
  }
}

export default Player;
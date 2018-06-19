import React, { Component } from 'react';
import './styles.css';

const contentful = require("contentful");
const client = contentful.createClient({
  space: "l5wqt7w3yse5",
  accessToken: "805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0"
});

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
      <div>
        {
          this.state.response === null 
          ? 
          'Loading...' 
          :
          this.state.response.map( (player, key) => (
            <div 
              key={ key } 
              className={`player player-${player.fields.id} player-${player.fields.id % 2 === 0 ? 'right' : 'left'}`}
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
                  { player.fields.name }
                  <span className="player__nickname">
                    `{ player.fields.nickname }`
                  </span>
                  {player.fields.surname}
                </h2>
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
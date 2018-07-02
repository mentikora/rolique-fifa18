import React from 'react'
import './styles.css'
// Anton`Batya`Yatseniuk
// Markiian`borschtsch`Linynskyi
// Vladyslav`PHP>all`Bilyi
// Roman`css4food`Horobets
// Pavlo`blackhorse`Servatovych
// Nazar`walldestroyer`Vasylyshyn
// Volodymyr`YaPridymav`Paskiv
// Roman`RapGod`Malec
let qualificationGrid = [
  [
    {
      players: [1, 6],
      games: [{ main: [99, 99] }, { main: [99, 99], penalties: [99, 98] }]
    },
    {
      players: [5, 8],
      games: [{ main: [99, 99] }, { main: [99, 99], penalties: [99, 98] }]
    },
    {
      players: [9, 7],
      games: [{ main: [99, 99] }, { main: [99, 99], penalties: [99, 98] }]
    },
    {
      players: [2, 3],
      games: [{ main: [99, 99] }, { main: [99, 99], penalties: [99, 98] }]
    }
  ]
]
const getPlayerName = (id, players) => players.find(player => player.id === id).name
const getPlayerSurname = (id, players) => players.find(player => player.id === id).surname

export const Bracket = ({ playersData }) => (
  <div>
    <div className='bracket-wrapper'>
      {
        qualificationGrid.map(stage => (
          <div>
            {
              stage.map(pair => (
                <div className='bracket-cell'>
                  <div className='bracket-team'>
                    <h3 className='bracket-team__name'>
                      { getPlayerName(pair.players[0], playersData) } { getPlayerSurname(pair.players[0], playersData) }
                    </h3>
                    <div className='bracket-team__score'>
                      <span className='bracket-team__score-g1'>1</span>
                      <span className='bracket-team__score-g2'>2 | p(4)</span>
                    </div>
                  </div>
                  <div className='bracket-team'>
                    <h3 className='bracket-team__name'>
                      { getPlayerName(pair.players[1], playersData) } { getPlayerSurname(pair.players[1], playersData) }
                    </h3>
                    <div className='bracket-team__score'>
                      <span className='bracket-team__score-g1'>1</span>
                      <span className='bracket-team__score-g2'>2 | p(5)</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
      {/* <div className="bracket-row">
        <h4>Qualification</h4>
        <div className="bracket-cell">
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              Yatseniuk
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2 | p(4)</span>
            </div>
          </div>
          <div className="bracket-team">
            <h3 className="bracket-team__name">
              Vasylyshyn
            </h3>
            <div className="bracket-team__score">
              <span className="bracket-team__score-g1">1</span>
              <span className="bracket-team__score-g2">2 | p(5)</span>
            </div>
          </div>
        </div>

      </div> */}

    </div>
  </div>
)

import React, { Component } from 'react'
import './styles.css'
import Loader from '../loader'
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'l5wqt7w3yse5',
  accessToken: '805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0'
})
class Sponsors extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: null
    }
  }
  componentDidMount () {
    client.getEntries({content_type: 'partners'})
      .then((response) => this.setState(
        {
          response: response.items
        }
      ))
      .catch(console.error)
  }
  render () {
    return (
      <div className='sponsors'>
        {
          this.state.response === null ? <Loader /> : this.state.response.map((sponsor, key) => (
            <div
              className='sponsor'
              key={key}
              style={{backgroundImage: `url(${sponsor.fields.image.fields.file.url})`}}
            >
              <h3 className='sponsor__name'>
                {sponsor.fields.name}
              </h3>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Sponsors

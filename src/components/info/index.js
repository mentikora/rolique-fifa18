import React, { Component } from 'react'
import './styles.css'
import Loader from '../loader'
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'l5wqt7w3yse5',
  accessToken: '805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0'
})
class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subtitle: ''
    }
  }

  componentDidMount () {
    client.getEntries({content_type: 'tournament'})
      .then((response) => this.setState(
        {
          title: response.items['0'].fields.name,
          subtitle: response.items['0'].fields.date
        }
      ))
      .catch(console.error)
  }
  render () {
    const { title, subtitle } = this.state
    return (
      <div className='info'>
        <span className='info__pretitle'>
          Current tournament
        </span>
        {
          !this.state.title ? <Loader /> : <div className='info__block'>
            <h2 className='info__title'>
              {title}
            </h2>
            <span className='info__subtitle'>
              {subtitle}
            </span>
          </div>
        }
      </div>

    )
  }
}
export default Info

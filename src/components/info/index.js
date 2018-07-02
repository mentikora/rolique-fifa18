import React, { Component } from 'react'
import './styles.css'
import InfoInput from './info-field'
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
      formEditable: false,
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

  ondblclick () {
    this.setState({
      formEditable: !this.state.formEditable
    })
  }

  onChange (name, value) {
    this.setState({
      [name]: value
    })
  }
  render () {
    const { title, subtitle, formEditable } = this.state
    return (
      <div className='info' onDoubleClick={this.ondblclick}>
        <form
          className={`info__form ${formEditable ? 'info__form--edit' : ''}`}
        >
          <span className='info__pretitle'>
            Current tournament
          </span>
          {
            !this.state.title ? <Loader /> : <div className='info__form-block'>
              <InfoInput
                className='info__title'
                text={title}
                onChange={value => this.onChange('title', value)}
                disabled={!formEditable}
              />
              <InfoInput
                className='info__subtitle'
                text={subtitle}
                onChange={value => this.onChange('subtitle', value)}
                disabled={!formEditable}
              />
            </div>
          }
          <input
            type='submit'
            className='info__form-submit'
          />
        </form>
      </div>

    )
  }
}
export default Info

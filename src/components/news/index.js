import React, { Component } from 'react'
import './styles.css'
import Loader from '../loader'
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'l5wqt7w3yse5',
  accessToken: '805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0'
})
class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: null
    }
  }
  componentDidMount () {
    client.getEntries({content_type: 'news', order: 'sys.createdAt'})
      .then((response) => this.setState(
        { response: response }
      ))
      .catch(console.error)
  }
  render () {
    return (
      <div className='news'>
        {
          !this.state.response ? <Loader /> : this.state.response.items.reverse().map((item, key) => (
            <div
              key={key}
              className='news-item'
            >
              <p className='news-item__date'>
                {item.fields.date}
              </p>
              <h2 className='news-item__title'>
                {item.fields.title}
              </h2>
              <p className='news-item__text'>
                {item.fields.text}
              </p>
            </div>
          ))
        }
      </div>
    )
  }
}
export default News

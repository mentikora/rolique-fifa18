import React, { Component } from 'react';
import './styles.css';

const contentful = require("contentful");
const client = contentful.createClient({
  space: "l5wqt7w3yse5",
  accessToken: "805be81373240aeb73d560b7cb619df34c501edcca1d48501c1844c46dbedbc0"
});

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  componentDidMount = () => {
    client.getEntries({content_type: 'news'})
      .then((response) => this.setState(
        { response: response }
      ))
      .catch(console.error)
  }
  
  render() {
    return (
      <div className="news">
        {
          this.state.response === null 
          ? 
          'Loading...' 
          :
          this.state.response.items.sort( (a, b ) => a.fields.id - b.fields.id ).reverse().map( (item, key) => (
            <div 
              key={ key }
              className={`news-item ${item.fields.status === 1 ? 'news-item--semi' : ''} ${item.fields.status === 2 ? 'news-item--full' : ''}`}
            >
              <p className="news-item__date">
                { item.fields.date }
              </p>
              <h2 className="news-item__title">
                { item.fields.title }
              </h2>
              <p className="news-item__text">
                { item.fields.text }
              </p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default News;
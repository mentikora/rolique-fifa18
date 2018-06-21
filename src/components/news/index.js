import React from 'react';
import './styles.css';

const news = [
  {
    title: 'Results of the first championship',
    text: 'Anton vzdryukav Vlada 7:0, ale tse ne dopomohlo yomu vzyaty sriblo chempionatu, tomu v rezulʹtati - bronza. V finali zustrilysʹ p\'yanyy komentator Volodymyr Papasʹkiv i batʹko Eminema - Roman Maletsʹ, yakyy i poyikhav dodomu peremozhtsem.',
    status: '3',
    date: '15.06.2018'
  },
  {
    title: 'Group B, day 2. Poland strong!',
    text: 'Argentina-Poland (2:1), Poland-Spain (1:1) ',
    status: '1',
    date: '21/06/18'
  },
  {
    title: 'Roma crowned Elite Series FIFA champions',
    text: 'Roma Fnatic proved they belong in the top-tier team after being crowned the inaugural Gfinity Elite Series FIFA champions.',
    status: '2',
    date: '27/04/18'
  },
  {
    title: 'Group A, day 2',
    text: 'The French have caught the frogs all match: France-Columbia(0:3), Belgium-France(2:2)',
    status: '1',
    date: '11/03/18'
  },
  {
    title: 'MLS launches esports league',
    text: 'EA Sports and the MLS have joined forces to launch the eMLS Cup, with 19 MLS franchised signed up.',
    status: '1',
    date: '16/01/18'
  },
  {
    title: 'Ligue 1 link up with EA Sports',
    text: 'The French Professional Football League has announced a partnership with EA Sports to launch the first European eSports football league - e-Ligue 1.',
    status: '1',
    date: '19/10/16'
  },
]

export default () => (
  <div className="news">
    {
      news.map( item => (
        <div 
          className={`news-item ${item.status == 2 ? 'news-item--semi' : ''} ${item.status == 3 ? 'news-item--full' : ''}`}
        >
          <p className="news-item__date">
            { item.date }
          </p>
          <h2 className="news-item__title">
            { item.title }
          </h2>
          <p className="news-item__text">
            { item.text }
          </p>
        </div>
      ))
    }
  </div>
)
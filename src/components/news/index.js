import React from 'react';
import './styles.css';

const news = [
  {
    title: 'Results of the first championship',
    text: 'Антон вздрюкав Влада 7:0, але це не допомогло йому взяти срібло чемпіонату, тому в результаті - бронза. В фіналі зустрілись п\'яний коментатор Володимир Папаськів і батько Емінема - Роман Малець, який і поїхав додому переможцем.',
    status: '3',
    date: '15.06.2018'
  },
  {
    title: 'FIFA eWorld Cup returns to London',
    text: 'EA and FIFA have announced that the FIFA eWorld Cup Grand Final 2018 will take place in London.',
    status: '1',
    date: '24/05/18'
  },
  {
    title: 'Roma crowned Elite Series FIFA champions',
    text: 'Roma Fnatic proved they belong in the top-tier team after being crowned the inaugural Gfinity Elite Series FIFA champions.',
    status: '2',
    date: '27/04/18'
  },
  {
    title: 'eSports: Man City make major signing',
    text: 'Yinsu Collins casts an eye over the past week, as Kingzone continue to dominate and Man City make a major signing.',
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
          <h2 className="news-item__tile">
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
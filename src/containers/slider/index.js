import React from 'react'
import Slider from 'react-slick'
import Player from './player'

import './styles.css';

import malecF from './images/malec.png';
import paskivF from './images/paskiv.png';
import antonF from './images/anton.png';
import igorF from './images/igor.png';
import vladF from './images/vlad.png';
import markF from './images/mark.png';
import horoF from './images/horo.png';
import pavloF from './images/pavlo.png';
import olegF from './images/oleg.png';

import malecB from './images/malecB.png';
import paskivB from './images/paskivB.png';
import antonB from './images/antonB.png';
import igorB from './images/igorB.png';
import vladB from './images/vladB.png';
import markB from './images/markB.png';
import horoB from './images/horoB.png';
import pavloB from './images/pavloB.jpg';
import olegB from './images/olegB.png';

const data = [
  {
    name: 'R. Malec',
    nickname: '说唱神',
    image: {
      front: malecF,
      back: malecB
    },
    team: 'Porto',
    color: ''
  },
  {
    name: 'V. Paskiv',
    nickname: '我想',
    image: {
      front: paskivF,
      back: paskivB
    },
    team: 'Inter',
    color: ''
  },
  {
    name: 'A. Yatseniuk',
    nickname: '父亲',
    image: {
      front: antonF,
      back: antonB
    },
    team: 'Real Madrid',
    color: ''
  },
  {
    name: 'I. Semenyuk',
    nickname: '索尼格',
    image: {
      front: igorF,
      back: igorB
    },
    team: 'Juventus',
    color: ''
  },
  {
    name: 'V. Bilyi',
    nickname: 'PHP很棒',
    image: {
      front: vladF,
      back: vladB
    },
    team: 'Barselona',
    color: ''
  },
  {
    name: 'M. Linynskyi',
    nickname: '罗宋汤',
    image: {
      front: markF,
      back: markB
    },
    team: 'Manchester City',
    color: ''
  },
  {
    name: 'R. Horobets',
    nickname: 'css的食物',
    image: {
      front: horoF,
      back: horoB
    },
    team: 'Napoli',
    color: ''
  },
  {
    name: 'P. Servatovych',
    nickname: '敌人不会通过',
    image: {
      front: pavloF,
      back: pavloB
    },
    team: 'Shaktar',
    color: ''
  },
  {
    name: 'O. Shcherbachenko',
    nickname: '',
    image: {
      front: olegF,
      back: olegB
    },
    team: 'Manchester United',
    color: ''
  },
]

export default class RSlider extends React.Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      rows: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      className:"player",
      variableWidth: true,
      centerMode: true,
      focusOnSelect: true,
      customPaging: i => (
        <div className="button">
          {i + 1}
        </div>
      )
    };

    return (
      <Slider {...settings} className="rslider">
        {
          data.map( (item, key) => {
            return (
              <Player
                key={key}
                team={item.team}
                name={item.name}
                image={item.image}
                nickname={item.nickname}
              />
              )
            })
          }
      </Slider>
    );
  }
}

import React from 'react'
import Slider from "react-slick"
import Player from './player'

import './styles.css';

import front1 from './images/hulk.gif';
import back1 from './images/js.jpg';
import front2 from './images/hulk.gif';
import back2 from './images/js.jpg';

const data = [
  {
    name: 'R. Malec',
    nickname: '说唱神',
    image: {
      front: front1,
      back: back1
    },
    team: 'Dynamo',
    color: ''
  },
  {
    name: 'V. Paskiv',
    nickname: '我想',
    image: {
      front: front1,
      back: back1
    },
    team: 'Atlitico Huila',
    color: ''
  },
  {
    name: 'A. Yatseniuk',
    image: '',
    nickname: '父亲',
    team: 'Real Madrid',
    color: ''
  },
  {
    name: 'I. Semenyuk',
    nickname: '索尼格',
    image: '',
    team: 'Juventus',
    color: ''
  },
  {
    name: 'V. Bilyi',
    nickname: 'PHP很棒',
    image: '',
    team: 'Barselona',
    color: ''
  },
  {
    name: 'M. Linynskyi',
    nickname: '罗宋汤',
    image: '',
    team: 'Manchester City',
    color: ''
  },
  {
    name: 'R. Horobets',
    nickname: 'css的食物',
    image: '',
    team: 'Napoli',
    color: ''
  },
  {
    name: 'P. Servatovych',
    nickname: '敌人不会通过',
    image: '',
    team: 'Shaktar',
    color: ''
  },
]

export default class RSlider extends React.Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0
  };
  
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
      // beforeChange: (current, next) => this.setState({ activeSlide: next }),
      // afterChange: current => this.setState({ activeSlide2: current }),
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

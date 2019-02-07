import React from 'react'
import Slider from "react-slick"
import Player from './player'
// import Video from '../../components/video'

import './styles.css';

import videoSrc from './video/sample.mp4'

import front1 from './images/hulk.gif';
import back1 from './images/js.jpg';

const data = [
  {
    name: 'R. Malec',
    nickname: '说唱神',
    image: {
      front: front1,
      back: back1
    },
    team: 'Porto',
    color: ''
  },
  {
    name: 'V. Paskiv',
    nickname: '我想',
    image: {
      front: front1,
      back: back1
    },
    team: 'Inter',
    color: ''
  },
  {
    name: 'A. Yatseniuk',
    nickname: '父亲',
    image: {
      front: front1,
      back: back1
    },
    team: 'Real Madrid',
    color: ''
  },
  {
    name: 'I. Semenyuk',
    nickname: '索尼格',
    image: {
      front: front1,
      back: back1
    },
    team: 'Juventus',
    color: ''
  },
  {
    name: 'V. Bilyi',
    nickname: 'PHP很棒',
    image: {
      front: front1,
      back: back1
    },
    team: 'Barselona',
    color: ''
  },
  {
    name: 'M. Linynskyi',
    nickname: '罗宋汤',
    image: {
      front: front1,
      back: back1
    },
    team: 'Manchester City',
    color: ''
  },
  {
    name: 'R. Horobets',
    nickname: 'css的食物',
    image: {
      front: front1,
      back: back1
    },
    team: 'Napoli',
    color: ''
  },
  {
    name: 'P. Servatovych',
    nickname: '敌人不会通过',
    image: {
      front: front1,
      back: back1
    },
    team: 'Shaktar',
    color: ''
  },
  {
    name: 'O. Shcherbachenko',
    nickname: '',
    image: {
      front: front1,
      back: back1
    },
    team: 'Manchester United',
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
      focusOnSelect: true,
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

import React from 'react'
import Slider from "react-slick"

import './styles.css';

export default class RSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: i => (
        <div className="button">
          {i + 1}
        </div>
      )
    };
    return (
      <Slider {...settings} className="rslider">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

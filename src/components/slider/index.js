import React, { Component } from 'react'
import Slider from 'react-slick'
import './styles.css'
class MemoriesSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true
    }
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    )
  }
}
export default MemoriesSlider
import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ParallaxItem = ({ transformY, transformStep, className, backgroundImage }) => (
  <div
    className={`parallax__item ${className ? className : ''}`}
    style={{
      transform: `translate3d(0, -${transformY * transformStep}px, 0)`,
      backgroundImage: `url(${backgroundImage})`,
    }}
  />
)

ParallaxItem.propTypes = {
  transformY: PropTypes.number.isRequired,
  transformStep: PropTypes.number.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
}
ParallaxItem.defaultProps = {
  transformY: 0,
  transformStep: 0,
}

export default ParallaxItem

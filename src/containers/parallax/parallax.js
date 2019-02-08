import React from 'react'
import ParallaxItem from './parallaxItem'
import './styles.css'
import Logo from '../../components/logo/index';

import img1 from './images/bg1.png'
import img2 from './images/bg2-1.png'
import img3 from './images/bg3.png'
import img4 from './images/bg4-1.png'
import img5 from './images/bg5.png'
import img6 from './images/bg6.png'

const items = [
  img1, img2, img3, img4, img5
]

class Parallax extends React.Component {

  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      scroll: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(e){
    this.setState({scroll: window.pageYOffset})
    // console.log(this.state.scroll)
  }

  render() {

    return(
      <React.Fragment>
        <Logo />
        <div className="parallax" onScroll={this.handleScroll}>
          {
            items.map( (item, value) => {
              return <ParallaxItem
                key={value}
                backgroundImage={item}
                transformStep={value + 1 * 0.5}
                transformY={this.state.scroll / 10}
              />
            })
          }
          <ParallaxItem backgroundImage={img6} />
        </div>
      </React.Fragment>
    )
  }
}

export default Parallax

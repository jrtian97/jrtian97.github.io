import React, { Component } from 'react'
import './Home.css'

import homeHero from '../images/home.jpg'

class Home extends Component {
  render() {
    return (
      <div
        className="home"
        style={{ backgroundImage: `url(${homeHero})` }}
      ></div>
    )
  }
}

export default Home

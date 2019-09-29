import React, { Component } from 'react'
import './Home.css'

import homeHero from '../images/home_hero2.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          className="home-hero"
          src={ homeHero }
          alt="hero"
        />
      </div>
    )
  }
}

export default Home
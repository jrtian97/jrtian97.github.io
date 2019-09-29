import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

export default () => {
  return (
    <header>
      <h1 className="title"><Link to="/" className="title-link">JUNRUO</Link></h1>
      <nav>
        <ul className="nav-bar">
          <li><NavLink to="/projects" className="nav-link" activeClassName="selected">Projects</NavLink></li>
          <li><NavLink to="/about" className="nav-link" activeClassName="selected">About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

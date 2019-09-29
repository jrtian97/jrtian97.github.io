import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Component/Header/Header'
import Content from './Component/Content/Content'
import Footer from './Component/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
              <>
                <div className="header-wrapper">
                  <Header />
                </div>
                <div className="content-wrapper">
                  <Content location={ location } />
                </div>
              </>
            )}
          />
        </Router>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App

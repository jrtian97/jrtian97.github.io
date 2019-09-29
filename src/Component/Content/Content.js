import React, { Component } from 'react'
import './Content.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

import Home from '../../Home/Home'
import Projects from '../../Projects/Projects'
import About from '../../About/About'

class Content extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return !(this.props.location.pathname === nextProps.location.pathname)
  }

  render() {
    const { location } = this.props

    return (
      <main className="content">
        <TransitionGroup component={ null }>
          <CSSTransition
            key={ location.key }
            classNames="fade"
            timeout={ 400 }>
            <Switch location={ location }>
              <Route exact path="/" component={ Home } />
              <Route exact path="/projects" component={ Projects } />
              <Route exact path="/about" component={ About } />
              <Route render={ () => <div className="not-found">Page Not Found</div> } />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    )
  }
}

export default Content
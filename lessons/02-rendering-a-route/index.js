import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import { Router, Route, hashHistory } from 'react-router'
// render(<App/>, document.getElementById('app'))
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/repos/:userName/:repoName" component={Repos}/>
  </Router>
), document.getElementById('app'))

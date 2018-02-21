import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'


import HeaderBar from './HeaderBar'
import Chart from './Chart'
import Settings from "./Settings";
import About from "./About";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <HeaderBar/>
        <div className="AppContent">
          <Route exact path="/" render={()=>( <Redirect to="/chart" /> )} />
          <Route exact path="/chart" component={Chart}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/about" component={About}/>
        </div>
      </div>
    </Router>
    )
  }
}

export default App

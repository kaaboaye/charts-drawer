import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './HeaderBar.css'

class HeaderBar extends Component {
  render() {
    return (
    <header className="Main">
      <div className="Info">This yours app is using localStorage.</div>

      <div className="Route">
        <Link to="/chart">Chart</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
    )
  }
}

export default HeaderBar

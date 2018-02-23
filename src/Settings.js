import React, { Component } from 'react'

import './Settings.css'

import Config from './Config'

class Settings extends Component {
  constructor() {
    super()
    this.state = {
      scale: localStorage.scale || (localStorage.scale = Config.Scale),
      width: localStorage.width || (localStorage.width = Config.Width),
      height: localStorage.height || (localStorage.height = Config.Height)
    }
  }

  scaleChange = (e) => {
    this.setState({
      scale: localStorage.scale = e.target.value
    })
  }

  widthChange = (e) => {
    this.setState({
      width: localStorage.width = e.target.value
    })
  }

  heightChange = (e) => {
    this.setState({
      height: localStorage.height = e.target.value
    })
  }

  render() {
    return (
      <div id="Settings">
        <div id="Scale">
          <h2>Scale</h2>
          <p>
            <span>1 unit is an equivalent of</span>
            <input id="Scale" type="number" value={this.state.scale} onChange={this.scaleChange}/>
            <span>pixels.</span>
          </p>
          <p>
            <span>{Config.MinScale}</span>
            <input type="range" min={Config.MinScale} max={Config.MaxScale} step={Config.StepScale}
                   value={this.state.scale} onChange={this.scaleChange}/>
            <span>{Config.MaxScale}</span>
          </p>
        </div>

        <div id="Resolution">
          <h2>Resolution</h2>
          <table>
            <tbody>
              <tr>
                <td colSpan="9">
                  TODO select resolution from dropdown list
                </td>
              </tr>
              <tr>
                <td>Width </td>
                <td><input type="number" value={this.state.width} onChange={this.widthChange}/></td>
              </tr>
              <tr>
                <td>Height </td>
                <td><input type="number" value={this.state.height} onChange={this.heightChange}/></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="RestoreDefaults">
          <h2>Restore to the default settings…</h2>
          <p>and clear localStorage.</p>
          <input type="button" value="Click" onClick={()=>{
            localStorage.clear()
            window.location.href = '/'
          }}/>
        </div>
      </div>
    )
  }
}

export default Settings

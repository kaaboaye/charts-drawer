import React, { Component } from 'react'

import './Chart.css'
import Config from "./Config";

class Chart extends Component {
  constructor() {
    super()
    this.state = {
      f: localStorage.f || (localStorage.f = Config.f)
    }
  }

  f = (x) => {return -x}

  fChange = (e) => {
    this.setState({
      f: localStorage.f = e.target.value
    })
  }

  fUpdate = () => {
    const f = this.state.f

    if (f === "") return

    // Test if everything is ok
    try {
      // eslint-disable-next-line
      let x = 1
      // eslint-disable-next-line
      eval(f)
    }
    catch (e) {
      console.log(e)
      return
    }

    // eslint-disable-next-line
    this.f = new Function('x', `return -(${f})`)
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    console.log("Updating the chart")

    const ctx = this.refs.canvas.getContext('2d')
    const scale = localStorage.scale || (localStorage.scale = Config.Scale)
    const width = localStorage.width || (localStorage.width = Config.Width)
    const height = localStorage.height || (localStorage.height = Config.Height)

    // Update the function
    this.fUpdate()

    // Update the size
    this.refs.canvas.width = width
    this.refs.canvas.height = height

    // Clean the canvas
    ctx.clearRect(0,0, width, height);

    // Render the chart
    ctx.beginPath()

    // Render the scale

    // Horizontal scale
    ctx.moveTo(0, height/2)
    ctx.lineTo(width, height/2)

    // Vertical scale
    ctx.moveTo(width/2, 0)
    ctx.lineTo(width/2, height)

    // Set cartesian RF
    ctx.translate(width/2, height/2)

    // Render the chart
    {
      // Starting point
      let prev = {}
      prev.x = -width/2 / scale
      prev.y = this.f(prev.x)

      prev.x *= scale
      prev.y *= scale

      // Move to the starting point
      ctx.moveTo(prev.x, prev.y)

      let p = {}
      for (let x = -width/2+1; x <= width/2; ++x) {
        // Scale the coordinates to cartesian RF
        p.x = x / scale
        p.y = this.f(p.x)

        if (isNaN(p.y)) {
          console.log("nan")
        }

        // Scale back
        p.x *= scale
        p.y *= scale

        // Draw line between previous and present points
        ctx.lineTo(p.x, p.y)

        // Update the previous point
        prev = {
          x: p.x,
          y: p.y
        }
      }
    }

    // Print
    ctx.stroke()
  }

  render() {
    return (
      <div id="Chart">
        <p><label>f(x) = </label><input id="f" type="text" value={this.state.f} onChange={this.fChange}/></p>
        <canvas ref="canvas"/>
      </div>
    )
  }
}

export default Chart

import React, { Component } from 'react'
import Sketch from 'react-p5'

let values = []
let i = 0
let w = 10
let comp = 0
let swaps = 0

export default class Draw extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comps : 0,
      swapp : 0,
    }
  }
  handleChange( a, b) {
    this.setState({ comps: a, swapp: b,})
  }
  setup = (p5, parentRef) => {
    p5.createCanvas(500, 500).parent(parentRef);
    values = new Array(p5.width/w)
    for(let i = 0; i < values.length; i++){
      values[i] = Math.floor(p5.random(p5.height))
      // console.log(values[i])
    }
  }
  draw = p5 => {
    p5.background(0)
    // p5.ellipse(100, 100, 100)
    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        comp++
        if (a > b) {
          this.swap(values, j, j + 1);
        }
    }
    } else {
      console.log('finished');
      this.handleChange(comp, swaps)
      p5.noLoop();
    }
    i++;
    for (let i = 0; i < values.length; i++) {
      p5.fill(256, 0, 0);
      p5.rect(i * w, p5.height - values[i], w, values[i])

      // p5.line(i, p5.height, i, p5.height - values[i]);
    }
  }
  swap(arr, a, b){
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    swaps++
  }
  render() {
    return (
      <div>
        <h1>Selection Sort of {values.length} numbers in array</h1>
        <h3>Number of comparisions: {this.state.comps}</h3>
        <h4>Number of swaps: {this.state.swapp}</h4>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    )
  }
}

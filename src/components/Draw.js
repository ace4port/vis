import React, { Component } from 'react'
import Sketch from 'react-p5'

let values = []
let i = 0
let j = 0
export default class Draw extends Component {
    setup = (p5, parentRef) => {
    p5.createCanvas(500, 500).parent(parentRef);
    values = new Array(p5.width)
    for(let i = 0; i < values.length; i++){
      values[i] = p5.random(p5.height)
      console.log(values[i])
      // values[i] = noise(i/100.0)*height;
    }
  }
  draw = p5 => {
    p5.background(0)
    // p5.ellipse(100, 100, 100)
    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
          this.swap(values, j, j + 1);
        }
    }
    } else {
      console.log('finished');
      p5.noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
      p5.stroke(256);
      p5.line(i, p5.height, i, p5.height - values[i]);
      // stroke(20);
      // line(i, height, i, height - values[i]);    
    }
  }

  swap(arr, a, b){
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
    render() {
        return (
            <div>
               <Sketch setup={this.setup} draw={this.draw} />
            </div>
        )
    }
}

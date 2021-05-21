import React, { Component } from "react"
import Sketch from "react-p5"

let values = []
let clr = []

export default class Insertion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: props.width,
			speed: props.speed,
			comp: 0,
			swap: 0,
		}
		this.calc = this.calc.bind(this)
	}
	incComp = () => this.setState({ ...this.state, comp: this.state.comp + 1 })
	incSwap = () => this.setState({ ...this.state, swap: this.state.swap + 1 })
	calc = (a, b) => this.setState({ comp: a, swap: b })

	setup = (p5, parentRef) => {
		p5.createCanvas(500, 500).parent(parentRef)
		values = new Array(p5.width / parseInt(this.state.width))
		for (let i = 0; i < values.length; i++) {
			values[i] = Math.floor(p5.random(p5.width))
			clr[i] = -1
		}
		this.insertion(values)
	}

	draw = (p5) => {
		p5.background(0)
		for (let i = 0; i < values.length; i++) {
			if (clr[i] === 0) p5.fill(255, 0, 0)
			else if (clr[i] === 1) p5.fill(0, 255, 0)
			else p5.fill(0, 0, 256)
			let w = this.state.width
			p5.rect(i * w, p5.height - values[i], w, values[i])
			//line(i, p5,height, i, p5.height - values[i])
		}
	}

	async insertion(arr) {
		for (let i = 1; i < arr.length; i++) {
			let j = i
			while (j > 0 && arr[j - 1] > arr[j]) {
				this.incComp()
				clr[j] = 0
				clr[j - 1] = 1
				await this.swap(arr, j, j - 1)
				clr[j] = clr[j - 1] = -1
				j--
			}
		}
	}

	async swap(a, x, y) {
		await this.sleep(this.props.speed)
		let temp = a[x]
		a[x] = a[y]
		a[y] = temp
		this.incSwap()
	}
	sleep(s) {
		return new Promise((resolve) => setTimeout(resolve, s))
	}

	render() {
		return (
			<>
				<h1>Insertion Sort of {values.length} numbers in array</h1>
				<h3>Number of comparisions: {this.state.comp}</h3>
				<h4>Number of swaps: {this.state.swap}</h4>
				<Sketch setup={this.setup} draw={this.draw} />
			</>
		)
	}
}

import React, { Component } from "react";
import Sketch from "react-p5";

let values = [];
let states = [];

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class Draw extends Component {
	constructor(props) {
		super(props);
		this.calc = this.calc.bind(this);
		this.state = {
			width: props.width,
			arr: props.arr,
			speed: props.speed,
			comp: 0,
			swap: 0,
		};
		this.incComp = this.incComp.bind(this);
		this.incSwap = this.incSwap.bind(this);
	}
	incComp = () => this.setState({ comp: this.state.comp + 1 });
	incSwap = () => this.setState({ swap: this.state.swap + 1 });
	calc = (x, y) => this.setState({ ...this.state, comp: x, swap: y });

	setup = (p5, parentRef) => {
		p5.createCanvas(400, 400).parent(parentRef);
		let w = this.state.width;
		values = new Array(p5.width / w);
		for (let i = 0; i < values.length; i++) {
			values[i] = this.state.arr[i];
			states[i] = -1;
		}
		this.quickSort(values, 0, values.length - 1);
	};

	async quickSort(arr, s, e) {
		if (s > e) return;
		this.incComp();
		let index = await this.partition(arr, s, e);
		states[index] = -1;
		await Promise.all([this.quickSort(arr, s, index - 1), this.quickSort(arr, index + 1, e)]);
	}
	async partition(arr, s, e) {
		for (let i = s; i < e; i++) {
			states[i] = 1;
		}
		this.incComp();
		let pivotValue = arr[e];
		let pivotIndex = s;
		states[pivotIndex] = 0;
		for (let i = s; i < e; i++) {
			if (arr[i] < pivotValue) {
				await this.swap(arr, i, pivotIndex);
				states[pivotIndex] = -1;
				pivotIndex++;
				states[pivotIndex] = 0;
			}
		}
		await this.swap(arr, pivotIndex, e);
		for (let i = s; i < e; i++) {
			if (i !== pivotIndex) states[i] = -1;
		}
		return pivotIndex;
	}
	draw = (p5) => {
		p5.background(0);
		for (let i = 0; i < values.length; i++) {
			p5.stroke(24);
			let w = this.state.width;
			if (states[i] === 0) p5.fill(255, 0, 0);
			else if (states[i] === 1) p5.fill(0, 255, 0);
			else p5.fill(0, 0, 255);
			p5.rect(i * w, p5.height - values[i], w, values[i]);
			// if (i === values.length - 1) this.handleChange(comp, swaps)
		}
	};
	async swap(arr, a, b) {
		await sleep(this.props.speed);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
		this.incSwap();
	}

	render() {
		return (
			<div>
				<h1>Quick Sort of {values.length} numbers in array</h1>
				<h3>Number of comparisions: {this.state.comp}</h3>
				<h4>Number of swaps: {this.state.swap}</h4>
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

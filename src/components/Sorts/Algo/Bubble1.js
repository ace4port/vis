import React, { Component } from "react";
import Sketch from "react-p5";

let values = [];
let clr = [];

export default class Draw extends Component {
	constructor(props) {
		super(props);
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

	setup = (p5, parentRef) => {
		p5.createCanvas(400, 400).parent(parentRef);
		values = new Array(p5.width / this.state.width);
		for (let i = 0; i < values.length; i++) {
			// values[i] = Math.floor(p5.random(p5.height))
			console.log(this.state.arr[i]);
			values[i] = this.state.arr[i];
			clr[i] = -1;
		}
		this.bubble(values, p5);
	};

	draw = (p5) => {
		p5.background(0);
		for (let i = 0; i < values.length; i++) {
			switch (clr[i]) {
				case 0:
					p5.fill(256, 0, 0);
					break;
				case 1:
					p5.fill(0, 255, 0);
					break;
				default:
					p5.fill(0, 0, 255);
			}
			let w = this.state.width;
			p5.rect(i * w, p5.height - values[i], w, values[i]);
			// p5.line(i, p5.height, i, p5.height - values[i]);
		}
	};
	async bubble(arr, p5) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - 1; j++) {
				this.incComp();
				clr[j] = 0;
				clr[j + 1] = 1;
				if (arr[j] > arr[j + 1]) await this.swap(arr, j, j + 1);
				clr[j] = clr[j + 1] = -1;
			}
		}
		p5.noLoop();
	}
	async swap(arr, a, b) {
		await this.sleep(this.props.speed);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
		this.incSwap();
	}
	sleep(s) {
		return new Promise((resolve) => setTimeout(resolve, s));
	}

	render() {
		return (
			<div>
				<h2> Bubble Sort of {values.length} numbers in array</h2>
				<h3>Number of comparisions: {this.state.comp}</h3>
				<h4>Number of swaps: {this.state.swap}</h4>
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

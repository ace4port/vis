import React, { Component } from "react";
import Sketch from "react-p5";

let arr = [];
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
		arr = new Array(p5.width / this.state.width);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = this.state.arr[i];
			clr[i] = -1;
		}
		this.mergeSort(arr, 0, arr.length - 1);
	};

	draw = (p5) => {
		p5.background(0);
		for (let i = 0; i < arr.length; i++) {
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
			p5.rect(i * w, p5.height - arr[i], w, arr[i]);
			// p5.line(i, p5.height, i, p5.height - values[i]);
		}
	};
	// Merges two subarrays-First is arr[l..m] Second is arr[m+1..r]
	async merge(arr, l, m, r) {
		let n1 = m - l + 1;
		let n2 = r - m;
		let L = new Array(m - l + 1); // Create temp arrays
		let R = new Array(r - m);
		for (let i = 0; i < n1; i++) L[i] = arr[l + i]; // Copy to temp arrays L and R
		for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
		// Merge the temp arrays back into arr[l..r]
		var i = 0; // Initial index of first subarray
		var j = 0; // Initial index of second subarray
		var k = l; // Initial index of merged subarray
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				this.incComp();
				arr[k] = L[i];
				i++;
			} else {
				this.incComp();
				arr[k] = R[j];
				j++;
			}
			k++;
		}
		while (i < n1) {
			this.incComp(); // Copy the remaining elements of L[], if there are any
			await this.sleep(this.state.speed);
			arr[k] = L[i];
			i++;
			k++;
		}
		while (j < n2) {
			this.incComp(); // Copy the remaining elements of R[], if there are any
			await this.sleep(this.state.speed);
			arr[k] = R[j];
			j++;
			k++;
		}
	}
	// l is for left index and r is right index of the sub-array of arr to be sorted
	async mergeSort(arr, l, r) {
		if (l >= r) return; //returns recursively
		var m = l + parseInt((r - l) / 2);
		await this.sleep(this.state.speed);
		await this.mergeSort(arr, l, m);
		await this.sleep(this.state.speed);
		await this.mergeSort(arr, m + 1, r);
		await this.sleep(this.state.speed);
		await this.merge(arr, l, m, r);
	} //# This code is contributed by Mayank Khanna taken from Geeks4Geeks.org
	sleep(s) {
		return new Promise((resolve) => setTimeout(resolve, s));
	}
	render() {
		return (
			<div>
				{/* <h1> Merge Sort of {arr.length} numbers in array</h1> */}
				<h3>Number of comparisions: {this.state.comp}</h3>
				{/* <h4>Number of swaps: {this.state.swap}</h4> */}
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

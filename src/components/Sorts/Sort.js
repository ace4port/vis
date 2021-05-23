import React, { Component } from "react"
import Sketch from "react-p5"

let values = []
let clr = []
let w = [100, 100, 50, 25, 10, 2]
let s = [1, 5, 50, 250, 500, 1000]

export default class Draw extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: props.type,
			width: w[props.width],
			speed: s[props.speed],
			comp: 0,
			swap: 0,
		}
		this.incComp = this.incComp.bind(this)
		this.incSwap = this.incSwap.bind(this)
	}
	incComp = () => this.setState({ comp: this.state.comp + 1 })
	incSwap = () => this.setState({ swap: this.state.swap + 1 })

	setup = (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef)
		values = new Array(p5.width / this.state.width)
		for (let i = 0; i < values.length; i++) {
			values[i] = Math.floor(p5.random(p5.height))
			clr[i] = -1
		}
		this.state.type == "bubble"
			? this.bubble(values, p5)
			: this.state.type == "insertion"
			? this.insertion(values, p5)
			: this.state.type == "quick"
			? this.quickSort(values, 0, values.length - 1)
			: this.mergeSort(values, 0, values.length - 1)
	}

	draw = (p5) => {
		p5.background(0)
		for (let i = 0; i < values.length; i++) {
			switch (clr[i]) {
				case 0:
					p5.fill(250, 250, 0)
					break
				case 1:
					p5.fill(0, 255, 255)
					break
				default:
					p5.fill(255, 0, 255)
			}
			let w = this.state.width
			p5.rect(i * w, p5.height - values[i], w, values[i])
			// p5.line(i, p5.height, i, p5.height - values[i]);
		}
	}

	async bubble(arr, p5) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - 1; j++) {
				this.incComp()
				clr[j] = 0
				clr[j + 1] = 1
				if (arr[j] > arr[j + 1]) await this.swap(arr, j, j + 1)
				clr[j] = clr[j + 1] = -1
			}
		}
		p5.noLoop()
	}

	async insertion(arr, p5) {
		for (let i = 1; i < arr.length; i++) {
			let j = i
			this.incComp()
			while (j > 0 && arr[j - 1] > arr[j]) {
				this.incComp()
				clr[j] = 0
				clr[j - 1] = 1
				await this.swap(arr, j, j - 1)
				clr[j] = clr[j - 1] = -1
				j--
			}
		}
		p5.noLoop()
	}

	// Merges two subarrays-First is arr[l..m] Second is arr[m+1..r]
	async merge(arr, l, m, r) {
		let n1 = m - l + 1
		let n2 = r - m
		let L = new Array(m - l + 1) // Create temp arrays
		let R = new Array(r - m)
		for (let i = 0; i < n1; i++) L[i] = arr[l + i] // Copy to temp arrays L and R
		for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j]
		// Merge the temp arrays back into arr[l..r]
		var i = 0 // Initial index of first subarray
		var j = 0 // Initial index of second subarray
		var k = l // Initial index of merged subarray
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				this.incComp()
				arr[k] = L[i]
				// await this.sleep(this.state.speed)
				i++
			} else {
				this.incComp()
				arr[k] = R[j]
				j++
			}
			this.incSwap()
			k++
		}
		await this.sleep(this.state.speed)
		while (i < n1) {
			this.incComp() // Copy the remaining elements of L[], if there are any
			arr[k] = L[i]
			i++
			k++
		}
		while (j < n2) {
			this.incComp() // Copy the remaining elements of R[], if there are any
			arr[k] = R[j]
			j++
			k++
		}
	}
	// l is for left index and r is right index of the sub-array of arr to be sorted
	async mergeSort(arr, l, r) {
		if (l >= r) return //returns recursively
		var m = l + parseInt((r - l) / 2)
		await Promise.all([
			await this.mergeSort(arr, l, m),
			await this.mergeSort(arr, m + 1, r),
			await this.merge(arr, l, m, r),
		])
	} //# This code is contributed by Mayank Khanna taken from Geeks4Geeks.org

	async quickSort(arr, s, e, p5) {
		if (s > e) return
		this.incComp()
		let index = await this.partition(arr, s, e)
		clr[index] = -1
		await Promise.all([
			this.quickSort(arr, s, index - 1),
			this.quickSort(arr, index + 1, e),
		])
	}
	async partition(arr, s, e) {
		for (let i = s; i < e; i++) {
			clr[i] = 1
		}
		this.incComp()
		let pivotValue = arr[e]
		let pivotIndex = s
		clr[pivotIndex] = 0
		for (let i = s; i < e; i++) {
			if (arr[i] < pivotValue) {
				await this.swap(arr, i, pivotIndex)
				clr[pivotIndex] = -1
				this.incComp()
				pivotIndex++
				clr[pivotIndex] = 0
			}
		}
		await this.swap(arr, pivotIndex, e)
		for (let i = s; i < e; i++) {
			if (i !== pivotIndex) clr[i] = -1
		}
		return pivotIndex
	}

	async swap(arr, a, b) {
		this.state.width < 200 && (await this.sleep(this.state.speed))
		let temp = arr[a]
		arr[a] = arr[b]
		arr[b] = temp
		this.incSwap()
	}
	sleep(s) {
		return new Promise((resolve) => setTimeout(resolve, s))
	}

	render() {
		return (
			<div>
				<h3>
					Array Size: {values.length} Number of comparisions: {this.state.comp}{" "}
					- Number of swaps:
					{this.state.swap}
				</h3>
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		)
	}
}

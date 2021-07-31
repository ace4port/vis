import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

let values = []
let val1 = []
let val2 = []
let valb = []
let valQ = []
let valM = []
let vali = []
let v = 50
let a1Comp = 0
let a2Comp = 0
let a1Swap = 0
let a2Swap = 0

const Sort = (props) => {
	// const [state, setState] = useState({
	// 	w,
	// });
	const [start, setStart] = useState(false)
	const [type1, setType] = useState(props.type)

	useEffect(
		(p5) => {
			setType(props.type)
			genArray(p5)
		},

		[type1, props.type]
	)

	const genArray = (p5) => {
		for (let i = 0; i < v; i++) {
			values[i] = Math.ceil(Math.random() * 400)
			val1[i] = values[i]
			val2[i] = values[i]
			valb[i] = values[i]
			vali[i] = values[i]
			valQ[i] = values[i]
			valQ[i] = values[i]
		}
	}
	const setupBubble = (p5, parentRef) => {
		p5.createCanvas(400, 400).parent(parentRef)
		bubble(valb)
	}
	const setupInsertion = (p5, parentRef) => {
		p5.createCanvas(400, 400).parent(parentRef)
		insertion(vali)
	}
	const setupMerge = (p5, parentRef) => {
		p5.createCanvas(400, 400).parent(parentRef)
		mergeSort(valM, 0, valM.length - 1)
	}
	// const setupQuick = (p5, parentRef) => {
	// 	p5.createCanvas(400, 400).parent(parentRef);
	// 	quickSort(valQ, 0, valQ.length - 1);
	// };

	// const setup1 = (p5, parentRef) => {
	// 	p5.createCanvas(400, 400).parent(parentRef);
	// 	insertion(val1);
	// 	// if (type1 === 0 || 1 || 2) bubble(val1);
	// 	// else if (type1 === 3 || 4) insertion(val1);
	// 	// if (type1 === 5)
	// 	// mergeSort(val1, 0, val1.length - 1);
	// };
	// const setup2 = (p5, parentRef) => {
	// 	console.log(type1);
	// 	p5.createCanvas(400, 400).parent(parentRef);
	// 	if (type1 === 0) insertion(val2);
	// 	else if (type1 === 1 || 3) mergeSort(val2, 0, val2.length - 1);
	// 	else if (type1 === 2 || 4 || 5) quickSort(val2, 0, val2.length - 1);
	// };
	const draw1 = (p5) => {
		p5.background(20)
		let w = p5.width / v
		for (let i = 0; i < val1.length; i++) {
			p5.fill(0, (val1[i] * 250) / 400, ((400 - val1[i]) * 250) / 400)
			p5.rect(i * w, p5.height - val1[i], w, val1[i])
		}
	}
	const draw2 = (p5) => {
		p5.background(20)
		let w = p5.width / v
		for (let i = 0; i < val2.length; i++) {
			p5.fill(scale(val2[i]), scale(400 - val2[i]), 0)
			p5.rect(i * w, p5.height - val2[i], w, val2[i])
		}
	}
	return (
		<>
			<h3 style={{ display: 'inline-block' }}>
				Swaps in bubble: {a1Swap} - Swaps in insertion: {a2Swap}
			</h3>
			<div styles={{ display: 'inline-block' }}>
				<Button onClick={() => setStart((s) => !s)}>Start</Button>
			</div>
			<div style={{ display: 'inline-block' }}>
				{start && (
					<Sketch
						setup={type1 === 0 || 1 || 2 ? setupBubble : type1 === 3 || 4 ? setupInsertion : setupMerge}
						draw={draw1}
					/>
				)}
				{/*Logic to which setup and draw should be called */}
			</div>
			<div style={{ display: 'inline-block', margin: '20px' }}>
				{start && (
					<Sketch
						// setup={type1 === 0 ? setupInsertion : type1 === 1 || 3 ? setupMerge : setupQuick}
						setup={setupInsertion}
						draw={draw2}
					/>
				)}
			</div>
		</>
	)
}

export default Sort

const bubble = async (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				await swap(arr, j, j + 1, 10)
				a1Swap++
				await sleep(10)
			}
			a1Comp++
		}
	}
	console.log('Bubble', a1Swap)
	console.log(a1Comp)
}

const insertion = async (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		while (j > 0 && arr[j - 1] > arr[j]) {
			await swap(arr, j, j - 1, 10)
			a2Swap++
			j--
			await sleep(10)
			a1Comp++
		}
		// await sleep(10);
		a2Comp++
	}
	console.log('Insertion', a2Swap, a2Comp)
}

const swap = async (arr, x, y, s) => {
	await sleep(s)
	let temp = arr[x]
	arr[x] = arr[y]
	arr[y] = temp
}
const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s))

function scale(number, inMin = 10, inMax = 350, outMin = 0, outMax = 255) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// async function quickSort(arr, s, e) {
// 	if (s > e) return
// 	let index = await partition(arr, s, e)
// 	await Promise.all([quickSort(arr, s, index - 1), quickSort(arr, index + 1, e)])
// }
// async function partition(arr, s, e) {
// 	let pivotValue = arr[e]
// 	let pivotIndex = s
// 	for (let i = s; i < e; i++) {
// 		if (arr[i] < pivotValue) {
// 			await swap(arr, i, pivotIndex)
// 			pivotIndex++
// 		}
// 	}
// 	await swap(arr, pivotIndex, e, 1000)
// 	// for (let i = s; i < e; i++) {
// 	// 	if (i !== pivotIndex) states[i] = -1;
// 	// }
// 	return pivotIndex
// }

// Merges two subarrays-First is arr[l..m] Second is arr[m+1..r]
async function merge(arr, l, m, r) {
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
			// this.incComp();
			arr[k] = L[i]
			i++
		} else {
			// this.incComp();
			arr[k] = R[j]
			j++
		}
		k++
	}
	while (i < n1) {
		// this.incComp(); // Copy the remaining elements of L[], if there are any
		// await sleep(speed);
		arr[k] = L[i]
		i++
		k++
	}
	while (j < n2) {
		// this.incComp(); // Copy the remaining elements of R[], if there are any
		// await sleep(speed);
		arr[k] = R[j]
		j++
		k++
	}
}
// l is for left index and r is right index of the sub-array of arr to be sorted
async function mergeSort(arr, l, r) {
	if (l >= r) return //returns recursively
	var m = l + parseInt((r - l) / 2)
	// await this.sleep(this.state.speed);
	await mergeSort(arr, l, m)
	// await this.sleep(this.state.speed);
	await mergeSort(arr, m + 1, r)
	// await this.sleep(this.state.speed);
	await merge(arr, l, m, r)
} //# This code is contributed by Mayank Khanna taken from Geeks4Geeks.org

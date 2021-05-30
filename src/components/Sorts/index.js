import React, { useState } from "react";
import Sketch from "react-p5";

let values = [];
let val = [];
let v = 50;
let bComp = 0,
	iComp = 0;
let bSwap = 0,
	iSwap = 0;

const Sort = () => {
	// const [state, setState] = useState({
	// 	w,
	// });

	const setup = (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef);
		for (let i = 0; i < v; i++) {
			values[i] = Math.floor(p5.random(p5.height));
			val[i] = values[i];
		}
		bubble(values);
	};
	const set = (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef);
		insertion(val);
	};
	const draw = (p5) => {
		p5.background(20);
		let w = p5.width / v;
		for (let i = 0; i < values.length; i++) {
			p5.fill(0, (values[i] * 250) / 400, ((400 - values[i]) * 250) / 400);
			p5.rect(i * w, p5.height - values[i], w, values[i]);
		}
	};
	const draww = (p5) => {
		p5.background(20);
		let w = p5.width / v;
		for (let i = 0; i < val.length; i++) {
			p5.fill(scale(val[i]), scale(400 - val[i]), 0);
			p5.rect(i * w, p5.height - val[i], w, val[i]);
		}
	};

	return (
		<>
			<h2>Bubble Sort visualized using React and p5</h2>
			<div style={{ display: "inline-block" }}>
				<Sketch setup={setup} draw={draw} />
			</div>
			<div style={{ display: "inline-block", margin: "20px" }}>
				<Sketch setup={set} draw={draww} />
			</div>
			<h3>Swaps in bubble: {bSwap}</h3>
			<h3>Swaps in insertion: {iSwap}</h3>
		</>
	);
};

export default Sort;

const bubble = async (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				await swap(arr, j, j + 1, 10);
				bSwap++;
			}
			bComp++;
			await sleep(10);
		}
	}
	console.log("Bubble", bSwap);
	console.log(bComp);
};

const insertion = async (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i;
		while (j > 0 && arr[j - 1] > arr[j]) {
			await swap(arr, j, j - 1, 20);
			iSwap++;
			j--;
			await sleep(20);
			iComp++;
		}
		await sleep(20);
		iComp++;
	}
	console.log("Insertion", iSwap, iComp);
};

const swap = async (arr, x, y, s) => {
	await sleep(s);
	let temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};
const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s));

function scale(number, inMin = 10, inMax = 350, outMin = 0, outMax = 255) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

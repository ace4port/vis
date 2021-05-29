import React, { useState } from "react";
import Sketch from "react-p5";

let values = [];
let val = [];

const Sort = () => {
	// const [state, setState] = useState({
	// 	w,
	// });

	const setup = (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef);
		for (let i = 0; i < 50; i++) {
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
		let w = p5.width / 50;
		for (let i = 0; i < values.length; i++) {
			p5.fill(0, (values[i] * 250) / 400, ((400 - values[i]) * 250) / 400);
			p5.rect(i * w, p5.height - values[i], w, values[i]);
		}
	};
	const draww = (p5) => {
		p5.background(20);
		let w = p5.width / 50;
		for (let i = 0; i < val.length; i++) {
			p5.fill(scale(val[i]), scale(400 - val[i]), 0);
			p5.rect(i * w, p5.height - val[i], w, val[i]);
		}
	};

	return (
		<>
			<h2>Bubble Sort visualized using React and p5</h2>
			<Sketch setup={setup} draw={draw} />
			<Sketch setup={set} draw={draww} />
		</>
	);
};

export default Sort;

const bubble = async (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) await swap(arr, j, j + 1, 20);
		}
	}
};

const insertion = async (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i;
		// this.incComp();
		while (j > 0 && arr[j - 1] > arr[j]) {
			// this.incComp();
			// clr[j] = 0;
			// clr[j - 1] = 1;
			await swap(arr, j, j - 1, 10);
			// clr[j] = clr[j - 1] = -1;
			j--;
		}
	}
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

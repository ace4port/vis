import React from "react";
import Sketch from "react-p5";

let array = [];
let clr = [];
let width = 20;

const Selection = () => {
	const setup = (p5) => {
		p5.createCanvas(400, 400);
		const { height } = p5;
		// console.log(width, height);
		array = new Array(p5.width / width);
		for (let i = 0; i < array.length; i++) {
			array[i] = Math.ceil(Math.random() * height);
			clr[i] = -1;
		}
		console.log(array);
		selection();
	};

	const draw = (p5) => {
		p5.background(220);
		// p5.fill(20, 220, 20);
		for (let i = 0; i < array.length; i++) {
			switch (clr[i]) {
				case 0:
					p5.fill(255, 255, 0);
					break;
				case 1:
					p5.fill(0, 255, 255);
					break;
				case 2:
					p5.fill(250, 100, 100);
					break;
				default:
					p5.fill(255, 0, 255);
			}
			p5.rect(i * width, p5.height - array[i], width, array[i]);
		}
	};

	const selection = async () => {
		let minIndex = 0;
		let i;
		for (i = 0; i < array.length - 1; i++) {
			minIndex = i;
			clr[i] = 0;
			for (let j = i + 1; j < array.length; j++) {
				clr[j] = 1;
				await sleep(300);
				if (array[j] < array[minIndex]) {
					// if (minIndex !== i)
					clr[minIndex] = 2; //set background color red
					minIndex = j;
				} else {
					//background color rred
					clr[j] = 2;
				}
			}
			clr[i] = 0;
			await swap(array, minIndex, i);
			await sleep(500);
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};

const swap = async (arr, x, y) => {
	await sleep(500);
	let temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const sleep = async (t) => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, t)
	);
};

export default Selection;

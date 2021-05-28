import React, {useState} from "react";
import Sketch from "react-p5";

const Sort = () => {
	// const [state, setState] = useState({
	// 	w,
	// });

	const setup = (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef);
	// 	for (let i = 0; i < values.length; i++) {
	// 		values[i] = Math.floor(p5.random(p5.height));
	// 		clr[i] = -1;
	// 	}
    //     BubbleChart(v, p5)
	// };
	const draw = (p5) => {
		p5.background(20);
	};
	return (
		<>
			<h2>Bubble Sort visualized using React and p5</h2>
			<Sketch setup={setup} draw={draw} />
		</>
	);
};

export default Sort;

import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import Sketch from "react-p5";
import Lex2 from "./Lex2";

let nodes = [];

export default class Collect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calc: false,
		};
		this.setCalc = this.setCalc.bind(this);
	}
	setCalc = () => this.setState({ calc: !this.state.calc });

	setup = (p5, parentRef) => {
		p5.createCanvas(400, 500).parent(parentRef);
		// p5.noLoop();
	};
	draw(p5) {
		p5.background(20);
		for (let i = 0; i < nodes.length; i++) nodes[i].show(p5);
	}
	mouseClicked(p5, event) {
		console.log(event);
		if (event.target.nodeName == "CANVAS") {
			let x = new Node(p5.mouseX, p5.mouseY);
			nodes.push(x);
		}
		console.log(nodes.length);
	}
	keyPressed(p5) {
		if (p5.isLooping()) {
			p5.noLoop();
		} else {
			p5.loop();
		}
		return false;
	}
	clearNodes() {
		while (nodes.length > 0) {
			nodes.pop();
		}
		console.log(nodes.length);

		// nodes = [];
	}
	render() {
		return (
			<Container>
				<h1>Travelling Salesman Problem using Brute force(Lexicographic)</h1>
				{!this.state.calc && (
					<Sketch
						setup={this.setup}
						draw={this.draw}
						keyPressed={this.keyPressed}
						mouseClicked={this.mouseClicked}
					/>
				)}
				{this.state.calc && <Lex2 nodes={nodes} />}
				{console.log(nodes.length)}
				<Button type='submit' onClick={this.clearNodes}>
					CLEAR!
				</Button>
				<Button type='submit' onClick={this.setCalc}>
					GO!
				</Button>
			</Container>
		);
	}
}

class Node {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	show(p5) {
		p5.stroke(255);
		p5.fill(255, 255, 255);
		p5.ellipse(this.x, this.y, 5);
	}
}

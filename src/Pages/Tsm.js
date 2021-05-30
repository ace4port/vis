import React, { Component } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { Slider, Grid } from "@material-ui/core";
import { MenuItem, FormHelperText, FormControl } from "@material-ui/core";
import { InputLabel, Select } from "@material-ui/core";
import Sketch from "react-p5";
import Lex2 from "../components/TSP/Lex2";

let nodes = [];
let frame = [2, 5, 10, 30, 60];

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

export default class Collect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calc: false,
			speed: frame[4],
			n: 0,
		};
		this.setCalc = this.setCalc.bind(this);
		this.setSpeed = this.setSpeed.bind(this);
	}
	setCalc = () => this.setState({ calc: !this.state.calc });
	setSpeed = (e, s) => this.setState({ speed: s });

	setup = (p5, parentRef) => {
		p5.createCanvas(400, 500).parent(parentRef);
		// p5.noLoop();
	};
	genRandom(n) {
		for (let i = 0; i < n; i++) {
			let x = new Node(parseInt(Math.random() * 400), parseInt(Math.random() * 400));
			nodes[i] = x;
		}
		console.log(nodes);
	}
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
				<form>
					<Grid container spacing={3}>
						<Grid item={6}>
							<Typography>Speed</Typography>
							<Slider
								defaultValue={this.state.speed}
								aria-labelledby='speed'
								valueLabelDisplay='auto'
								name='speed'
								step={1}
								min={1}
								max={5}
								value={this.state.speed}
								onChange={this.setSpeed}
							/>
						</Grid>
						<Button type='button' varaint='contained' size='small' color='primary' onClick={this.clearNodes}>
							CLEAR!
						</Button>
						<Grid item={6}>
							<FormControl
							// className={classes.formControl}
							>
								<InputLabel id='nodeNum'>Number of Nodes</InputLabel>
								<Select
									labelId='nodeNum'
									id='nodeNum'
									value={this.state.n}
									onChange={(e) => this.setState({ n: e.target.value })}
								>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={20}>20</MenuItem>
								</Select>
								<FormHelperText>Pick between 4 and 7</FormHelperText>
							</FormControl>
						</Grid>
						<Button
							type='button'
							varaint='contained'
							size='small'
							color='primary'
							onClick={() => this.genRandom(this.state.n)}
						>
							Generate Random
						</Button>
						<Button type='button' varaint='contained' size='small' color='secondary' onClick={this.setCalc}>
							GO!
						</Button>
					</Grid>
				</form>
				{!this.state.calc && <Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked} />}
				{this.state.calc && <Lex2 nodes={nodes} speed={this.state.speed} />}
				{console.log(nodes.length)}
			</Container>
		);
	}
}

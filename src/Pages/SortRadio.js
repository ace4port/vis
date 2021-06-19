import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

import Sort from "../components/Sorts/Sort";
import useStyles from "../components/styles";

const Wrapper = () => {
	const classes = useStyles();

	const [type, setType] = useState("bubble");
	const [controller, setController] = useState(false);
	const [width, setWidth] = useState(2);
	const [speed, setSpeed] = useState(2);

	const handleVal = (event) => {
		setType(event.target.value);
	};
	const setW = (e, w) => {
		setWidth(w);
	};
	const setS = (e, s) => setSpeed(s);
	const handleSubmit = (e) => {
		e.preventDefault();
		setController(!controller);
	};

	const marks = [
		{
			value: 1,
			label: "5",
		},
		{
			value: 2,
			label: "10",
		},
		{
			value: 3,
			label: "20",
		},
		{
			value: 4,
			label: "50",
		},
		{
			value: 5,
			label: "250",
		},
	];

	function valuetext(value) {
		return `${value}`;
	}

	return (
		<div className={classes.root}>
			<Grid container direction='row' justify='center' alignItems='stretch'>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Typography variant='h5' className={classes.title}>
							Sorting algorithms visualized
						</Typography>
						<Typography variant='h7'>
							<hr />
							<b>Tools used</b>: <strong>React</strong> and <strong>p5.js</strong> library
							<br />
							<b>How it works: </b>
							<br />
							Pick a sorting alorithm to visualize <br />
							Select array size
							<br /> Then pick the delay between swaps. <br />
							<i>Tip: Lower delay gives Faster sorting</i> <br />
							<br />
							Click <b>Sort</b> button to start to visualize.
							<br />
							Press <b>Stop</b> if you want to change some parameters
							<hr />
						</Typography>
						<footer className={classes.footer}>&#169;2021 All rights reserved</footer>
					</Paper>
				</Grid>

				<Grid item xs={5}>
					<Paper className={(classes.paper, classes.form)}>
						{!controller && (
							<>
								<FormControl component='fieldset' className={classes.radioWrap}>
									<FormLabel component='legend'>Select Sort Algorithm</FormLabel>
									<RadioGroup aria-label='sort' name='sort' value={type} onChange={handleVal} row>
										<FormControlLabel value='bubble' control={<Radio />} label='Bubble Sort' />
										<FormControlLabel value='insertion' control={<Radio />} label='Insertion Sort' />
										<FormControlLabel value='selection' control={<Radio />} label='Selection Sort' />
										<FormControlLabel value='quick' control={<Radio />} label='Quick Sort' />
										<FormControlLabel value='merge' control={<Radio />} label='Merge Sort' />
									</RadioGroup>
								</FormControl>
								<hr />

								<Grid container className={classes.sliderWrap}>
									<Grid item className={classes.slider}>
										<FormLabel component='legend'>Array Size</FormLabel>
										<Slider
											defaultValue={width}
											getAriaValueText={valuetext}
											aria-labelledby='width'
											name='width'
											step={1}
											min={1}
											max={5}
											marks={marks}
											value={width}
											onChange={setW}
										/>
									</Grid>
									<Grid item className={classes.slider1}>
										<FormLabel component='legend'>Delay</FormLabel>
										<Slider
											defaultValue={speed}
											getAriaValueText={valuetext}
											aria-labelledby='speed'
											// valueLabelDisplay='auto'
											name='speed'
											step={1}
											min={1}
											max={5}
											// marks={marks}
											value={speed}
											onChange={setS}
										/>
									</Grid>

									<Grid item className={classes.btnWrap}>
										<Button
											className={classes.btn}
											variant='contained'
											size='small'
											color='primary'
											type='submit'
											onClick={handleSubmit}
										>
											{controller ? "Stop" : "Sort"}
										</Button>
									</Grid>
								</Grid>
							</>
						)}
						{controller && (
							<div>
								<Button
									className={classes.btn}
									variant='contained'
									size='large'
									color='secondary'
									type='submit'
									onClick={handleSubmit}
								>
									{controller ? "Stop" : "Sort"}
								</Button>
							</div>
						)}
						{controller && <Sort width={width} speed={speed} type={type} />}
					</Paper>
				</Grid>

				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<Typography>
							<h3>Sorting algorithms</h3>
							Sorting algorithm is an algorithm that puts elements of a list in a certain order(ascending or
							descending). <br />
							The most frequently used orders are <b>numerical</b> order (0, 1, 2 ...) and <b>lexicographical</b>{" "}
							order(a, aa, ab ...)
							<hr />
							Sorting efficiency is an important metric for optimizing the efficiency and optimum utilization of
							resources <i>mostly memory and time</i>
							<br />
							Sorting small arrays <b>optimally</b> (least number of comparisons and swaps) or <b>fast</b> (taking into
							account machine specific details) is still an open research problem, with solutions only known for very
							small arrays. <hr />
							In this project we have visualized the working of few popular comparision based algorithms as challenge to
							grasp on basic concepts and internal working mechanisms.
							<ul>
								<b>Swap:</b> Bubble, Insertion and Selection
							</ul>
							<ul>
								<b>Recursive: </b>Merge sort
							</ul>
							<ul>
								<b>Divide and Conquer:</b> Quick sort
							</ul>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Wrapper;

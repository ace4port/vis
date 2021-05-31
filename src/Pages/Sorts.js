import React, { useState } from "react";

import Sort from "../components/Sorts/Sort";
import useStyles from "../components/styles";

import { Button, Container, CssBaseline, Paper } from "@material-ui/core";
import { Radio, FormControlLabel, FormLabel } from "@material-ui/core";
import { FormControl, RadioGroup } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

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
						<Typography variant='h6'>Sorting algorithms visualized using React and p5</Typography>
						<hr />
						<Typography variant='h5'>
							<b>How it works</b>
						</Typography>
						<Typography variant='p'>
							Choose an alorithm you would like to see visualized. <br />
							Select array size(number of elements in list) Then pick the delay. Lower delay gives Faster sorting.{" "}
							<br />
							Click Sort button to start and stop if you want to change some parameters
							<hr />
							<em>
								<b>Remember:</b>
							</em>
							The algorithms all have a delay of 10ms every loop in order to visualize it. Increasing delay increases it
							upto 1 second
						</Typography>
						<hr />
						<footer>&#169;2021 All rights reserved</footer>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper className={classes.paper}>
						{!controller && (
							<article className='form-wrapper'>
								<form className='form'>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Select Sort Algorithm</FormLabel>
										<RadioGroup aria-label='sort' name='sort' value={type} onChange={handleVal} row>
											<FormControlLabel value='bubble' control={<Radio />} label='Bubble' />
											<FormControlLabel value='insertion' control={<Radio />} label='Insertion' />
											<FormControlLabel value='quick' control={<Radio />} label='Quick Sort' />
											<FormControlLabel value='merge' control={<Radio />} label='Merge Sort' />
										</RadioGroup>
									</FormControl>
									<Grid container>
										<Grid item>
											<div className={classes.sld}>
												<Typography>Array Size/Width</Typography>
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
											</div>
										</Grid>
										<Grid item>
											<div className={classes.sld}>
												<Typography>Delay</Typography>
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
											</div>
										</Grid>
									</Grid>
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
								</form>
							</article>
						)}
						{controller && (
							<div>
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
							</div>
						)}
						{controller && <Sort width={width} speed={speed} type={type} />}
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<h3>Sorting algorithms</h3>
						<Typography>
							In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain
							order(ascending or descending). <br />
							The most frequently used orders are numerical order(0 1 2 ...) and lexicographical(a, aa, ab ...) order.
							<br />
							(Wikipedia) <br />
							<hr />
							Efficient sorting is an important metric for optimizing the efficiency and optimum utilization of
							resources mostly memory and time. <br />
							Sorting small arrays optimally (in least amount of comparisons and swaps) or fast (i.e. taking into
							account machine specific details) is still an open research problem, with solutions only known for very
							small arrays (less than 20 elements) <hr />
							In this project we have visualized the internal working of some algorithms in hope that it will help
							beginners grasp on basic concepts and internal working mechanism; comparing some metrics along the way.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Wrapper;

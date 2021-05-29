import React, { useState } from "react";

import Sort from "../components/Sorts/Sort";
import useStyles from "../components/styles";

import { Button, Container, CssBaseline } from "@material-ui/core";
import { Radio, FormControlLabel, FormLabel } from "@material-ui/core";
import { FormControl, RadioGroup } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

const Wrapper = () => {
	const classes = useStyles();
	const [type, setType] = useState("bubble");
	const [controller, setController] = useState(false);
	// const [value, setValue] = useState(50)
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
		// setArrP({ width: parseInt(e.target.value), speed: e.target.value })
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
		<>
			<Container style={{ margin: "100px 300px", width: "800px" }}>
				{/* <h2>Sorting algorithms Visualized using React and p5</h2> */}
				{!controller && (
					<article className='form-wrapper'>
						<form className='form'>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Select Sort Algorithm</FormLabel>
								<RadioGroup
									aria-label='sort'
									name='sort'
									value={type}
									onChange={handleVal}
									row
								>
									<FormControlLabel
										value='bubble'
										control={<Radio />}
										label='Bubble'
									/>
									<FormControlLabel
										value='insertion'
										control={<Radio />}
										label='Insertion'
									/>

									<FormControlLabel
										value='quick'
										control={<Radio />}
										label='Quick Sort'
									/>
									<FormControlLabel
										value='merge'
										control={<Radio />}
										label='Merge Sort'
									/>
								</RadioGroup>
							</FormControl>
							<div
								className={classes.sld}
								style={{
									display: "grid",
									alignItems: "center",
									alignContent: "start",
									width: "200px",
								}}
							>
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
									valueLabelDisplay='auto'
								/>
							</div>
							<div
								className={classes.sld}
								style={{ display: "inline-block", width: "200px" }}
							>
								<Typography>Speed</Typography>
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
							<div style={{ display: "inline-block", marginLeft: "20px" }}>
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
			</Container>
		</>
	);
};

export default Wrapper;

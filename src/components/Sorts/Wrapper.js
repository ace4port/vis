import React, { useState } from "react"
// import Bubble from "./Bubble"
// import Quick from "./Quick"
// import Insertion from "./Insertion"
// import Merge from "./Merge"
import Sort from "./Sort"
import { Button, Container, CssBaseline } from "@material-ui/core"
import {
	Radio,
	FormControlLabel,
	FormLabel,
	FormControl,
	RadioGroup,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"

const useStyles = makeStyles((theme) => ({
	root: {
		// display: "flex",
	},
	sld: { width: 400 },
	content: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		flexGrow: 1,
		marginTop: "100px",
		paddingTop: "100px",
	},
}))
const Wrapper = () => {
	const [type, setType] = useState("bubble")
	const [controller, setController] = useState(false)
	// const [value, setValue] = useState(50)
	const [width, setWidth] = useState(2)
	const [speed, setSpeed] = useState(2)

	const handleVal = (event) => {
		setType(event.target.value)
	}

	const setW = (e, w) => {
		setWidth(w)
	}
	const setS = (e, s) => setSpeed(s)
	const handleSubmit = (e) => {
		e.preventDefault()
		// setArrP({ width: parseInt(e.target.value), speed: e.target.value })
		setController(!controller)
	}
	const useStyles = makeStyles((theme) => ({
		root: {
			width: 300,
			marginLeft: "20px",
		},
	}))
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
	]
	function valuetext(value) {
		return `${value}`
	}
	const classes = useStyles()

	return (
		<>
			<Container style={{ margin: "100px 300px", width: "800px" }}>
				<h2>Sorting algorithms Visualized using React and p5</h2>
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
					</form>
				</article>
				{controller && <Sort width={width} speed={speed} type={type} />}
			</Container>
		</>
	)
}

export default Wrapper

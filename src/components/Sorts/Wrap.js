import React, { useState } from 'react'
import useStyles from '../styles'
import { marks } from '../../Data/marks'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Sort from './SortF'
import Blank from './Blank'

const Wrap = ({ type }) => {
	const classes = useStyles()

	const [controller, setController] = useState(false)
	const [width, setWidth] = useState(4)
	const [speed, setSpeed] = useState(2)

	const [comp, setComp] = useState(0)
	const [swaps, setSwaps] = useState(0)
	const [time, setTime] = useState(0)

	const [arr, setArr] = useState([])

	return (
		<Grid container direction='row' alignItems='stretch'>
			<Grid item xs={7}>
				{controller ? <Sort wd={width} spd={speed} type={type} arr={arr} setTime={setTime} /> : <Blank wd={width} setArr={setArr} />}
			</Grid>

			<Grid item xs={5}>
				<Paper className={classes.formWrap}>
					<FormLabel component='legend'>Array Size</FormLabel>
					<Slider
						defaultValue={width}
						getAriaValueText={(value) => `${value}`}
						aria-labelledby='width'
						name='width'
						step={1}
						min={1}
						max={5}
						marks={marks}
						value={width}
						onChange={(e, w) => setWidth(w)}
					/>

					<FormLabel component='legend'>Delay</FormLabel>
					<Slider
						defaultValue={speed}
						getAriaValueText={(value) => `${value}`}
						aria-labelledby='speed'
						name='speed'
						step={1}
						min={1}
						max={5}
						value={speed}
						onChange={(e, s) => setSpeed(s)}
					/>

					<Button
						className={classes.btn}
						variant='contained'
						size='small'
						color='primary'
						type='submit'
						onClick={() => setController((state) => !state)}
					>
						{controller ? 'Stop' : 'Sort'}
					</Button>
					<Typography variant='h6' className={classes.info}>
						Array size: {width}
					</Typography>
					<Typography variant='h6' className={classes.info}>
						Delay: {speed}
					</Typography>
					<Typography variant='h6' className={classes.info}>
						Comparisions: {comp}
					</Typography>
					<Typography variant='h6' className={classes.info}>
						Number of swaps: {swaps}
					</Typography>
					<Typography variant='h6' className={classes.info}>
						Time to sort: {time}
					</Typography>
					{/* <Typography variant='h6' className={classes.info}>
						Efficiency: O(n<sup>2</sup>)
					</Typography> */}
				</Paper>
			</Grid>
		</Grid>
	)
}

export default Wrap

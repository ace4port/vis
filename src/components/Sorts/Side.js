import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from '../styles'

const Side = () => {
	const classes = useStyles()

	return (
		<Paper className={`${classes.paper} ${classes.side}`}>
			<Typography variant='h6' className={classes.title}>
				Sorting algorithms visualized
			</Typography>
			<Typography>
				Sorting algorithms are algorithm that puts elements of a list in a certain order(ascending or descending).
				<br />
				The most frequently used orders are <b>numerical</b> order (0, 1, 2 ...) and <b>lexicographical</b> order(a, aa,
				ab ...)
				<hr />
				Sorting efficiency is an important metric for optimizing the efficiency and optimum utilization of resources
				<i>mostly memory and time</i>
				<br />
				Sorting small arrays <b>optimally</b> (least number of comparisons and swaps) or <b>fast</b> (taking into
				account machine specific details) is still an open research problem, with solutions only known for very small
				arrays. <hr />
				In this project we have visualized the working of few popular comparision based algorithms as challenge to grasp
				on basic concepts and internal working mechanisms.
				<ul>
					<b>Swap:</b> Bubble, Insertion and Selection
				</ul>
				<ul>
					<b>Recursive: </b>Merge sort
				</ul>
				<ul>
					<b>Divide and Conquer:</b> Quick sort
				</ul>
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
	)
}

export default Side

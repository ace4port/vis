import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "../components/styles";
import Tabs from "../components/Tabs";

const Wrapper = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container direction='row' justify='center' alignItems='stretch'>
				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<Typography variant='h5' className={classes.title}>
							Sorting algorithms visualized
						</Typography>
						{/* <hr /> */}
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

				<Grid item xs={8}>
					<Tabs />
				</Grid>
			</Grid>
		</div>
	);
};

export default Wrapper;

import React, { useState } from "react";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import useStyles from "../components/styles";
import Sort from "../components/Sorts";

const Compare = () => {
	const classes = useStyles;
	const [cmp, setCmp] = useState(0);
	const [controller, setController] = useState(false);

	const compare = () => {
		if (cmp === 0) setController((state) => !state);
	};

	return (
		<Container>
			<h1>asd</h1>
			<FormControl variant='filled' className={classes.FormControl}>
				<Grid>
					<InputLabel id='compType'>Select Algortihms</InputLabel>
					<Select labelId='compType' id='compType' value={cmp} onChange={(e) => e.target.value}>
						<MenuItem value={0}>Bubble and Insertion</MenuItem>
						<MenuItem value={1}>Bubble and Merge</MenuItem>
						<MenuItem value={2}>Bubble and Quick</MenuItem>
						<MenuItem value={3}>Insertion and Merge</MenuItem>
						<MenuItem value={4}>Insertion and Quick</MenuItem>
						<MenuItem value={5}>Quick and Merge</MenuItem>
					</Select>
				</Grid>
				<Grid>
					<Button variant='contained' size='small' color='primary' className={classes.btnCmp} onClick={compare}>
						Compare
					</Button>
				</Grid>
			</FormControl>
			{controller && <Sort />}
		</Container>
	);
};

export default Compare;

import React, { useState, useEffect } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core'

import useStyles from '../components/styles'
import Bubble from '../components/Sorts/Algo/Bubble1'
import Insertion from '../components/Sorts/Algo/InsertionC'
import Merge from '../components/Sorts/Algo/MergeC'
import Quick from '../components/Sorts/Algo/QuickC'

let arr = []

const Compare = () => {
	const classes = useStyles()
	const [cmp1, setCmp1] = useState(0)
	const [cmp2, setCmp2] = useState(0)
	const [controller, setController] = useState(false)

	const compare = () => {
		setController((state) => !state)
	}
	const gen = () => {
		for (let i = 0; i < 40; i++) {
			arr[i] = Math.ceil(Math.random() * 400)
			console.log(arr[i])
		}
	}
	useEffect(() => {
		gen()
	}, [controller])
	return (
		<Grid container>
			<Grid item xs={3}>
				<Paper className={classes.paper}>Hello there</Paper>
			</Grid>
			<Grid item xs={9}>
				<Paper className={classes.paper}>
					<form>
						<FormControl variant='filled' className={classes.FormControl}>
							<Grid container>
								<Grid item className={classes.btnCmp}>
									<InputLabel id='compType1'>Select first Algortihm</InputLabel>
									<Select labelId='compType1' id='compType1' value={cmp1} onChange={(e) => setCmp1(e.target.value)}>
										<MenuItem value={0}>Bubble</MenuItem>
										<MenuItem value={1}>Insertion</MenuItem>
										<MenuItem value={2}>Merge</MenuItem>
										<MenuItem value={3}>Quick</MenuItem>
									</Select>
								</Grid>
								<Grid item className={classes.btnCmp}>
									<InputLabel id='compType2'>Select second Algortihm</InputLabel>
									<Select labelId='compType2' id='compType2' value={cmp2} onChange={(e) => setCmp2(e.target.value)}>
										<MenuItem value={0}>Bubble</MenuItem>
										<MenuItem value={1}>Insertion</MenuItem>
										<MenuItem value={2}>Merge</MenuItem>
										<MenuItem value={3}>Quick</MenuItem>
									</Select>
								</Grid>
								<Grid item>
									<Button variant='contained' className={classes.btnCmp} color='primary' onClick={compare}>
										Compare
									</Button>
								</Grid>
							</Grid>
						</FormControl>
					</form>
					<hr />
					{/*Controls for sorts to compare */}
					{controller && (
						<article style={{ display: 'inline-block' }}>
							{cmp1 === 0 ? (
								<Bubble width={10} arr={arr} speed={10} />
							) : cmp1 === 1 ? (
								<Insertion width={10} arr={arr} speed={10} />
							) : cmp1 === 2 ? (
								<Merge width={10} arr={arr} speed={10} />
							) : (
								<Quick width={10} arr={arr} speed={10} />
							)}
						</article>
					)}
					{controller && (
						<article style={{ display: 'inline-block' }}>
							{cmp2 === 0 ? (
								<Bubble width={10} arr={arr} speed={10} />
							) : cmp2 === 1 ? (
								<Insertion width={10} arr={arr} speed={10} />
							) : cmp2 === 2 ? (
								<Merge width={10} arr={arr} speed={10} />
							) : (
								<Quick width={10} arr={arr} speed={10} />
							)}
						</article>
					)}
				</Paper>
			</Grid>
		</Grid>
	)
}
export default Compare

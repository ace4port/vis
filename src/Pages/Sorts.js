import React from 'react'

import Grid from '@material-ui/core/Grid'
import Tabs from '../components/Sorts/Tabs'
import Side from '../components/Sorts/Side'
import useStyles from '../components/styles'

const Wrapper = () => {
	const classes = useStyles()

	return (
		<Grid container direction='row' justify='center' alignItems='stretch'>
			<Grid item xs={3}>
				<Side />
			</Grid>

			<Grid item xs={9}>
				<Tabs />
			</Grid>
		</Grid>
	)
}

export default Wrapper

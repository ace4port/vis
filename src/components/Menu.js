import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import BarChart from '@material-ui/icons/BarChart'

import useStyles from './styles'

const Menu = () => {
	const classes = useStyles()
	return (
		<AppBar position='static' className={classes.appBar}>
			<Toolbar>
				<Link to='/' className={classes.link}>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<BarChart />
					</IconButton>
				</Link>
				<Typography variant='h5' className={classes.logo}>
					<Link to='/' className={classes.link}>
						AlgoVis
					</Link>
				</Typography>

				<Link to='/tree' className={classes.link}>
					<Button color='inherit' disabled>
						Trees
					</Button>
				</Link>
				<Link to='/sort' className={classes.link}>
					<Button color='inherit'>Sort</Button>
				</Link>
				<Link to='/compare' className={classes.link}>
					<Button color='inherit'>Compare</Button>
				</Link>
				<Link to='/lex' className={classes.link}>
					<Button color='inherit'>TSP</Button>
				</Link>
				<Link to='/graph' className={classes.link}>
					<Button color='inherit' disabled>
						Graphs
					</Button>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Menu

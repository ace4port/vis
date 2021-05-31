import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core/";
import { BarChart } from "@material-ui/icons";
import useStyles from "./styles";

const Menu = () => {
	const classes = useStyles();
	return (
		<div className='classes.root'>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar>
					<Link to='/' className={classes.link}>
						<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
							<BarChart />
						</IconButton>
					</Link>
					<Typography variant='h5' className={classes.title}>
						<Link to='/' className={classes.link}>
							AlgoVis
						</Link>
					</Typography>
					<Link to='/' className={classes.link}>
						<Button color='inherit'>Home</Button>
					</Link>
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
		</div>
	);
};

export default Menu;

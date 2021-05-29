import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, IconButton } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Menu = () => {
	const classes = useStyles();
	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>
				{/* <IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
				>
					<MenuIcon />
				</IconButton> */}
				<Typography variant='h6' className={classes.title}>
					AlgoVis
				</Typography>
				<Link to='/' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Home</Button>
				</Link>
				<Link to='/tree' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Trees</Button>
				</Link>
				<Link to='/sort' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Sort</Button>
				</Link>
				<Link to='/compare' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Compare</Button>
				</Link>
				<Link to='/lex' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>TSP</Button>
				</Link>
				<Link to='/graph' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Graphs</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Menu;

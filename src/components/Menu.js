import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, IconButton } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	// appBar: {
	// 	zIndex: theme.zIndex.drawer + 1,
	// },
	// content: {
	// 	flexGrow: 1,
	// 	padding: theme.spacing(3),
	// },
	// menuButton: {
	// 	marginRight: theme.spacing(2),
	// },
}));

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
					<Button color='inherit'>Trees</Button>
				</Link>
				<Link to='/' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Sorting</Button>
				</Link>
				<Link to='/tsp' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>Graphs</Button>
				</Link>
				<Link to='/lex' style={{ textDecoration: "none", color: "white" }}>
					<Button color='inherit'>TSP</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Menu;

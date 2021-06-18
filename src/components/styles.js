import { BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	//nav elements
	logo: {
		flexGrow: 1,
	},
	link: {
		textDecoration: "none",
		color: "azure",
	},

	//after nav
	root: {
		height: "100vh",
	},

	paper: {
		height: "95vh",
		margin: "3px 1px",
		padding: "20px",
		borderRadius: "4px",
		display: "flex",
		flexWrap: "wrap",
		background: "linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)",
		overflow: "scroll",
	},
	title: {
		textTransform: "capitalize",
	},
	footer: {
		float: "bottom",
	},

	//form elements
	form: {
		height: "95vh",
		margin: "3px 1px 20px 1px",
		padding: "20px",
		borderRadius: "4px",
		flexWrap: "wrap",
		background: "linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)",
		alignItems: "top",
	},
	sliderWrap: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	slider: {
		width: "200px",
	},
	slider1: {
		marginTop: "-15px",
		width: "200px",
	},

	//tabs
	tabs: {
		backgroundColor: "rgba(255, 255, 255, .25)",
		backdropFilter: "blur(5px)",
		// height: "85vh",
		width: "100%",
	},
	btnContainer: {
		position: "relative",

		left: "700px",
		top: "-500px",
	},
	tabBtn: {
		padding: "10px",
		color: "white",
		backgroundColor: "rgb(220, 0, 220)",
	},
}));

export default useStyles;

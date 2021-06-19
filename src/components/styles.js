import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	//nav elements
	body: {
		margin: "0px",
		padding: "0px",
	},
	logo: {
		flexGrow: 1,
	},
	link: {
		textDecoration: "none",
		color: "azure",
	},
	//ater nav
	paper: {
		height: "89vh",
		margin: "3px 1px",
		padding: "2px 5px",
		borderRadius: "4px",
		display: "flex",
		flexWrap: "wrap",
		background: "linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)",
		overflow: "auto",
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
		margin: "0px 1px 2px 1px",
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
		margin: "2px 2px 10px 2px",
		padding: "5px",
		// height: "950px",
		width: "100%",
	},
	btnContainer: {
		position: "absolute",
		top: "85px",
		right: "20px",
	},
	tabBtn: {
		padding: "10px",
		color: "white",
		backgroundColor: "rgb(220, 0, 220)",
		"&:hover": {
			backgroundColor: "rgba(220, 0, 220, 0.25)",
		},
	},

	//sort wrap
	formWrap: {
		margin: "60px 10px 10px 0px",
		padding: "20px 20px",
		display: "grid",
		background: "none",
	},
	slider11: {
		width: "200px",
		margin: "10px 0px 0px",
	},
	info: {
		display: "block",
		margin: "10px 10px",
	},
}));

export default useStyles;

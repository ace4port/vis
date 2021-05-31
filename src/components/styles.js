import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
		width: "100%",
		// height: "100%",
		bottom: theme.spacing(2),
	},
	paper: {
		overflow: "hidden",
		// marginTop: "20px",
		margin: "3px 1px",
		height: "100%",
		borderRadius: "2px",
		padding: "20px",
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
	},
	sld: {
		display: "grid",
		alignItems: "center",
		marginRight: "20px",
		width: "200px",
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: "none",
		color: "white",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	btnCmp: {
		margin: "20px 20px",
	},
	// content: {
	// 	flexGrow: 1,
	// 	padding: theme.spacing(3),
	// },
	// menuButton: {
	// 	marginRight: theme.spacing(2),
	// },
}));

export default useStyles;

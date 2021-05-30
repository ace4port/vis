import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "20px",
		display: "flex",
		flexGrow: 1,
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
	sld: { width: 400 },
	content: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		flexGrow: 1,
		marginTop: "100px",
		paddingTop: "100px",
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
		margin: theme.spacing(1),
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

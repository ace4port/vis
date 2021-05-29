import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		marginLeft: "20px",
		display: "flex",
		flexGrow: 1,
		// display: "flex",
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

export default useStyles;

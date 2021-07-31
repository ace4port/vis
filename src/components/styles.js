import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	//nav elements
	logo: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'azure',
	},

	//after nav
	root: {
		height: '97vh',
	},

	paper: {
		height: '95vh',
		margin: '3px 1px',
		padding: '20px',
		borderRadius: '4px',
		flexWrap: 'wrap',
		background: 'linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)',
		display: 'flex',
	},
	title: {
		textTransform: 'capitalize',
	},
	footer: {
		float: 'bottom',
	},

	//form elements
	sliderWrap: {
		display: 'flex',
		alignContent: 'space-between',
	},
	slider: {
		marginRight: '30px',
		width: '200px',
	},
}))

export default useStyles

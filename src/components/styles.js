import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '0.4em',
		},
		'*::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,1)',
		},
		'*::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,1)',
			outline: '1px solid slategrey',
		},
	},
	//nav elements
	body: {
		margin: '0px',
		padding: '0px',
	},
	logo: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'azure',
	},
	//ater nav
	paper: {
		height: '89vh',
		margin: '0px 1px',
		padding: '2px 5px',
		borderRadius: '4px',
		display: 'flex',
		flexWrap: 'wrap',
		background: 'linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)',
		overflow: 'auto',
	},
	title: {
		textTransform: 'capitalize',
	},
	//side
	side: {
		margin: '0 -3px 4px 0',
		padding: '4px',
		backdropFilter: 'blur(5px)',
		fontSize: '0.85em',
		color: 'rgba(0, 0,0, 0.75)',
	},

	//tabs
	tabs: {
		backgroundColor: 'rgba(255, 255, 255, .25)',
		backdropFilter: 'blur(5px)',
		margin: '4px',
		padding: '5px',
		width: '100%',
		'&:after': {
			margin: '20px',
			padding: '20px',
		}
	},
	tabTop: {
		marginTop: '2px'
	},
	btnContainer: {
		position: 'absolute',
		top: '490px',
		right: '30px',
		zIndex: '2',
	},
	tabBtn: {
		padding: '10px',
		color: 'white',
		backgroundColor: 'rgb(220, 0, 220)',
		'&:hover': {
			backgroundColor: 'rgba(220, 0, 220, 0.75)',
		},
	},

	//sort wrap
	formWrap: {
		margin: '20px 10px 10px 0px',
		padding: '20px 20px',
		display: 'grid',
		background: 'none',
		backdropFilter: 'blur(10px)',
	},
	slider11: {
		width: '200px',
		margin: '10px 0px 0px',
	},
	info: {
		display: 'block',
		margin: '10px 10px',
	},

	//form elements
	form: {
		margin: '0px 1px 2px 1px',
		padding: '20px',
		borderRadius: '4px',
	},
	sliderWrap: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	slider: {
		width: '200px',
	},
	slider1: {
		marginTop: '25px',
		width: '200px',
	},

	sortDesc : {
		padding: '20px 0 0 10px'

	},
}))

export default useStyles

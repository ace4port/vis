import React, { useState } from "react";
import { Markup } from "interweave";

import { sortData } from "../Data/sortData";
import Bubble from "./Sorts/Algo/Bubble";
import Insertion from "./Sorts/Algo/Insertion";
import Selection from "./Sorts/Algo/Selection";
import Quick from "./Sorts/Algo/Quick";
import Merge from "./Sorts/Algo/Merge";

import useStyles from "./styles";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// //icons
import BubbleChart from "@material-ui/icons/BubbleChart";
import InsertChart from "@material-ui/icons/InsertChart";
import MergeType from "@material-ui/icons/MergeType";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div role='tabpanel' hidden={value !== index} id={`${index}`} aria-labelledby={`${index}`} {...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `${index}`,
		"aria-controls": `${index}`,
	};
}

export default function IconTabs() {
	const classes = useStyles();
	const [tab, setTab] = useState(0);

	const [type, setType] = useState("bubble");
	const [visualize, setVisualize] = useState(false);
	return (
		<Paper className={classes.paper}>
			<Paper square className={classes.tabs}>
				<Tabs
					value={tab}
					onChange={(event, newValue) => {
						setTab(newValue);
					}}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='primary'
					aria-label='sort icons'
				>
					<Tab icon={<BubbleChart />} label='Bubble Sort' {...a11yProps(0)} />
					<Tab icon={<InsertChart />} label='Insertion Sort' {...a11yProps(1)} />
					<Tab icon={<ArrowUpward />} label='Selection Sort' {...a11yProps(2)} />
					<Tab icon={<AccessTime />} label='Quick Sort' {...a11yProps(3)} />
					<Tab icon={<MergeType />} label='Merge Sort' {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={tab} index={0}>
					{!visualize ? <Markup content={sortData[0].markUp} /> : <Bubble width={10} speed={10} />}
				</TabPanel>
				<TabPanel value={tab} index={1}>
					{!visualize ? <Markup content={sortData[1].markUp} /> : <Insertion width={10} speed={10} />}
				</TabPanel>
				<TabPanel value={tab} index={2}>
					{!visualize ? <Markup content={sortData[2].markUp} /> : <Selection />}
				</TabPanel>
				<TabPanel value={tab} index={3}>
					{!visualize ? <Markup content={sortData[3].markUp} /> : <Quick width={10} speed={10} />}
				</TabPanel>
				<TabPanel value={tab} index={4}>
					{!visualize ? <Markup content={sortData[4].markUp} /> : <Merge width={10} speed={10} />}
				</TabPanel>
			</Paper>
			<div className={classes.btnContainer}>
				<Button
					variant='contained'
					size='small'
					className={classes.tabBtn}
					onClick={() => setVisualize((state) => !state)}
				>
					{!visualize ? "Visualize" : "Show descrription"}
				</Button>
			</div>
		</Paper>
	);
}

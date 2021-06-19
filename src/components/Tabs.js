import React, { useState } from "react";
import { Markup } from "interweave";

import { sortData } from "../Data/sortData";

import useStyles from "./styles";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// //icons
import BubbleChart from "@material-ui/icons/BubbleChart";
import InsertChart from "@material-ui/icons/InsertChart";
import MergeType from "@material-ui/icons/MergeType";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import Wrap from "./Sorts/Wrap";

/**
 * This is a component to render Tabs to hide and show data from a file
 * @param {none}
 * @returns JSX Tabs component with 5 sorting algorithms as tabs with description
 */
export default function IconTabs() {
	const classes = useStyles();
	const [tab, setTab] = useState(0);
	const [visualize, setVisualize] = useState(false);
	console.log(Markup);

	return (
		<Paper className={classes.paper}>
			<Paper square className={classes.tabs}>
				<div className={classes.btnContainer}>
					<Button
						variant='contained'
						size='small'
						className={classes.tabBtn}
						onClick={() => setVisualize((state) => !state)}
					>
						{!visualize ? "Visualize" : "Go back"}
					</Button>
				</div>
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
					{!visualize ? <Markup tagName='div' content={sortData[0].markUp} /> : <Wrap type='bubble' />}
				</TabPanel>
				<TabPanel value={tab} index={1}>
					{!visualize ? <Markup tagName='div' content={sortData[1].markUp} /> : <Wrap type='insertion' />}
				</TabPanel>
				<TabPanel value={tab} index={2}>
					{!visualize ? <Markup tagName='div' content={sortData[2].markUp} /> : <Wrap type='selection' />}
				</TabPanel>
				<TabPanel value={tab} index={3}>
					{!visualize ? <Markup tagName='div' content={sortData[3].markUp} /> : <Wrap type='quick' />}
				</TabPanel>
				<TabPanel value={tab} index={4}>
					{!visualize ? <Markup tagName='div' content={sortData[4].markUp} /> : <Wrap type='merge' />}
				</TabPanel>
			</Paper>
		</Paper>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div role='tabpanel' hidden={value !== index} id={`${index}`} aria-labelledby={`${index}`} {...other}>
			{value === index && <Box>{children}</Box>}
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

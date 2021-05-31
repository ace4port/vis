import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
//import Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Sorts from "./Pages/Sorts";
import Compare from "./Pages/Compare";
import Trav from "./Pages/Tsm";
import Graph from "./Pages/Graph";
import Tree from "./Pages/Tree";
import Tsp from "./Pages/Tsp";

// import Lex from "./components/TSP/Lex";
import Lex3 from "./components/TSP/Lex3";
import Sort from "./components/Sorts";

const App = () => {
	return (
		<Router>
			<Menu />
			<Switch>
				<Router exact path='/'>
					<Home />
				</Router>
				<Route exact path='/sort'>
					<Sorts />
				</Route>
				<Route exact path='/compare'>
					<Compare />
				</Route>
				<Route exact path='/graph'>
					<Graph />
				</Route>
				<Route exact path='/tree'>
					<Tree />
				</Route>
				<Route exact path='/lex'>
					<Tsp />
				</Route>
				<Route exact path='/srt'>
					<Sort />
				</Route>
				<Route exact path='/tsp'>
					<Trav />
				</Route>
				<Route exact path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};
export default App;

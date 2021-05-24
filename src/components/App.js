import React from "react";
import Drawer from "./Drawer";
import Sorts from "./Sorts/Wrapper";
import Tsp from "./TSP/Tsp";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lex from "./TSP/Lex";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Drawer />
				<Switch>
					<Router exact path='/'>
						<Sorts />
					</Router>
					<Route exact path='/sort'>
						<Sorts />
					</Route>
					<Route exact path='/tsp'>
						<Tsp />
					</Route>
					<Route exact path='/lex'>
						<Lex />
					</Route>
					<Route exact path='*'>
						<Error />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;

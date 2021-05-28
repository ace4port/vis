import React from "react";
import Menu from "./Menu";
import Sorts from "./Sorts/Wrapper";
import Tsp from "./TSP/Tsp";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lex from "./TSP/Lex";
import Lex3 from "./TSP/Lex3";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Menu />
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
					<Route exact path='/lex3'>
						<Lex3 />
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

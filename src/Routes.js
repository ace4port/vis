import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PATHS from './paths'
import Menu from './components/Menu'

//import Pages
import Home from './Pages/Home'
import Tree from './Pages/Tree'
import Sorts from './Pages/Sorts'
import Compare from './Pages/Compare'
import Tsp from './Pages/Tsp'
import Graph from './Pages/Graph'
import Error from './Pages/Error'

const RouteWithHeader = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<div>
				<Menu /> <Component {...props} {...rest} />{' '}
			</div>
		)}
	/>
)

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<RouteWithHeader exact path={PATHS.home} component={Home} />
				<RouteWithHeader exact path={PATHS.tree} component={Tree} />
				<RouteWithHeader exact path={PATHS.sort} component={Sorts} />
				<RouteWithHeader exact path={PATHS.compare} component={Compare} />
				<RouteWithHeader exact path={PATHS.lex} component={Tsp} />
				<RouteWithHeader exact path={PATHS.graph} component={Graph} />
				<RouteWithHeader path='*' component={Error} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

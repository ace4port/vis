import React from "react"
import Drawer from "./Drawer"
import Sorts from "./Sorts/Wrapper"
import Tsp from "./TSP/tsp"

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Drawer />
				<Sorts />
				{/* <Tsp /> */}
			</div>
		)
	}
}

export default App

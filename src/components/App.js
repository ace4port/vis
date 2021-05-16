import React from 'react'
import Nav from './Nav'
import Draw from './Draw'


class App extends React.Component {
	render() {
		return (
			<div className="App">
        <Nav />
				{/* <h1>React-p5</h1> */}
        <div style={{display: 'inline-block'}}>
          <Draw />
        </div>
			</div>
		);
	}
}

export default App;

import React from 'react'
import Nav from './Nav'
import Draw from './Draw'
import Draw1 from './Draw1'
import Draw2 from './Draw2'


class App extends React.Component {
	render() {
		return (
			<div className="App">
        {/* <Nav /> */}
				{/* <h1>React-p5</h1> */}
        <div style={{display: 'inline-block'}}>
          <Draw />
        </div>
        <div style={{display: 'inline-block'}}>
          <Draw1 />
        </div>
        <div style={{display: 'inline-block'}}>
          <Draw2 />
        </div>
			</div>
		);
	}
}

export default App;
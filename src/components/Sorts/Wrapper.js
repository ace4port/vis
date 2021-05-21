import React, { useState } from "react"
import Bubble from "./Bubble"
import Quick from "./Quick"
import Insertion from "./Insertion"

const Wrapper = () => {
	const [arrP, setArrP] = useState({ width: 10, speed: 50 })
	const [controller, setController] = useState(false)

	const handleChange = (e) => {
		setArrP({ ...arrP, [e.target.name]: parseInt(e.target.value) })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// setArrP({ width: parseInt(e.target.value), speed: e.target.value })
		setController(!controller)
	}
	return (
		<div style={{ minHeight: "100vh" }}>
			<h1>Sorting algorithms Visualized using React and p5</h1>
			<article className='form-wrapper'>
				<form className='form'>
					<div>
						<label htmlFor='width'>Choose array size</label>
						<input
							type='number'
							min='5'
							max='490'
							id='width'
							name='width'
							value={arrP.width}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='speed'>Choose sorting speed</label>
						<input
							type='number'
							min='5'
							max='1000'
							id='speed'
							name='speed'
							value={arrP.speed}
							onChange={handleChange}
						/>
					</div>
					<button type='submit' onClick={handleSubmit}>
						{controller ? "Stop" : "Sort"}
					</button>
				</form>
			</article>
			<div style={{ display: "inline-block" }}>
				{controller && <Bubble width={arrP.width} speed={arrP.speed} />}
			</div>
			<div style={{ display: "inline-block" }}>
				{controller && <Insertion width={arrP.width} speed={arrP.speed} />}
			</div>
			<div style={{ display: "inline-block" }}>
				{/* {controller && <Quick width={arrP.width} speed={arrP.speed} />} */}
			</div>
		</div>
	)
}

export default Wrapper

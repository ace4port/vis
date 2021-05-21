import React, { useState } from "react"
import Bubble from "./Bubble"
import Quick from "./Quick"
import Insertion from "./Insertion"
import Merge from "./Merge"

const Wrapper = () => {
	const [arrP, setArrP] = useState({ width: 10, speed: 50 })
	const [type, setType] = useState(0)
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
						<input
							type='radio'
							name='sort'
							id='bubble'
							value='bubble'
							onClick={() => setType(0)}
						/>
						<label htmlFor='bubble'>Bubble Sort</label>
						<input
							type='radio'
							name='sort'
							id='insertion'
							value='insertion'
							onClick={() => setType(1)}
						/>
						<label htmlFor='insertion'>Insertion Sort</label>
						<input
							type='radio'
							name='sort'
							id='quick'
							value='Quick'
							onClick={() => setType(2)}
						/>
						<label htmlFor='quick'>Quick Sort</label>
						<input
							type='radio'
							name='sort'
							id='merge'
							value='Merge'
							onClick={() => setType(3)}
						/>
						<label htmlFor='merge'>Merge Sort</label>
					</div>
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
				{type === 0
					? controller && <Bubble width={arrP.width} speed={arrP.speed} />
					: type === 1
					? controller && <Insertion width={arrP.width} speed={arrP.speed} />
					: type === 2
					? controller && <Quick width={arrP.width} speed={arrP.speed} />
					: controller && <Merge width={arrP.width} speed={arrP.speed} />}
			</div>
		</div>
	)
}

export default Wrapper

import React, { useState, useEffect } from 'react'
import Sketch, {p5 as p} from 'react-p5'
import {w} from '../../Data/sort'
import useStyles from '../styles'

let values = []
let clr = []

const Blank = ({wd, setArr}) => {
	const classes = useStyles()
	const [width, setWidth] = useState(w[wd])

	const setup = async (p5, parentRef) => {
		p5.createCanvas(500, 400).parent(parentRef)
		gen()
	}
	const gen = (p5) => {
		values = new Array(500)
		for(let i = 0; i < values.length; i++) {
			values[i] = Math.ceil(Math.random() * 400)
			clr[i] = -1
		}
	}

	useEffect(() => {
		gen(width)
		setArr(values)
	}, [wd])

	const draw = (p5) => {
		p5.background(0)
		let w = width
		for (let i = 0; i < values.length; i++) {
			p5.fill(250, 0, 250)
			p5.rect(i * w, p5.height - values[i], w, values[i])
		}
	}
	return	<Sketch setup={setup} draw={draw} />
}

export default Blank

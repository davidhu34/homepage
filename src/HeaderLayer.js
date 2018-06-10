import React, { Component } from 'react'
import { Spring } from 'react-spring'
import _ from 'lodash'

const Circle = ({ transform, opacity }) => (
	<div style={{
		display: 'inline-block',
		borderRadius: '50%',
		backgroundColor: 'white',
		margin: '1rem',
		width: '1rem',
		height: '1rem',
		opacity,
		transform
	}} />
)
class HeaderLayer extends Component {
	state = {}
	baseStyle = {
		position: 'fixed',
		zIndex: 10,
		top: 0,
		left:0,
		width: '100%',
		height: '2rem',
		opacity: 1,
		color: 'white',
		textAlign: 'center'
	}
	initStyle = {
		transform: 'scale(1)',
		opacity: '0'
	}
	hollowStyle = {
		transform: 'scale(0.8)',
		opacity: '0.5'
	}
	fullStyle = {
		transform: 'scale(1)',
		opacity: '0.8'
	}
	render() {
		const { parallaxIdx } = this.props

		return <div style={this.baseStyle}>
			{
				_.times( 3,
					i => <Spring key={i}
						from={this.initStyle}
						to={ i == parallaxIdx?
							this.fullStyle
							: this.hollowStyle
						}
						children={Circle}
					/>
				)
			}
		</div>
	}
}

export default HeaderLayer

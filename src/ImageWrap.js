import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Transition, Visibility } from 'semantic-ui-react'

class ImageWrap extends Component {
	ref = {}
	state = {}
	src = ''
	constructor(props) {
		console.log(props)
		super(props)
		this.src = props.src
	}
	handlePresense() {
		console.log('loading')
		this.setState({ imageLoading: true })
		const buffer = new Image();
        buffer.onload = () => {
			console.log('loaded')
			this.setState({
				imageLoaded: true,
				imageLoading: false
			})
		}
        buffer.src = this.src
	}
	render() {
		console.log(this.state)
		const { width, height, imageReady } = this.props
		if (!imageReady)  this.handlePresense();
		return <div>
			<Transition visible={!this.state.imageLoaded}>
				<div>sadfloewq</div>
			</Transition>
			<Transition visible={this.state.imageLoaded}>
				<div><img src={this.src}/></div>
			</Transition>
		</div>
	}
}

export default ImageWrap

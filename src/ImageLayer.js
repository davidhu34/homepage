import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Transition } from 'semantic-ui-react'

class ImageLayer extends Component {
	imageProportion = 3783/3007
	ref = {}
	state = {}
	baseStyle = {
		position: 'fixed',
		top: 0,
		left:0,
		width: '100%',
		height: '100%',
		opacity: 1,
		color: 'white',
		textAlign: 'center'
	}
	coverStyle = {
		WebkitBackgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		OBbackgroundSize: 'cover',
		backgroundSize: 'cover'
	}
	// for head circle
	clipStyleAttr(clipR, clipTop, clipRight) {
		return {
			clipPath: 'circle('+clipR+'px at '+clipRight+'px '+clipTop+'px)'
		}
	}
	maskStyleAttr(fromPercent = 5, toPercent = 20, blur = 10) {
		return {
			maskImage: '-webkit-linear-gradient(to bottom, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			filter: 'brightness(80%)blur('+blur+'px)'
		}
	}
	wallStyleAttr(blur = 20) {
		return {
			filter: 'blur('+blur+'px)'
		}
	}
	makeBaseStyle(props, imgUrl) {
		const { z, clip, mask, wall, clipR, clipTop, clipRight } = props

		let typeAttr = {}
		if (clip) {
			typeAttr = this.clipStyleAttr(clipR, clipTop, clipRight)
		} else if (mask) {
			typeAttr = this.maskStyleAttr()
		} else if (wall) {
			typeAttr = this.wallStyleAttr()
		}

		return {
			...this.baseStyle,
			zIndex: z,
			background: 'url('+imgUrl+') no-repeat top right fixed',
			...typeAttr,
			...this.coverStyle
		}
	}
	render() {
		const { width, height, imageReady } = this.props

		return <div>
			<Transition visible={imageReady}>
				<div
					ref={ ref => { if (imageReady) this.ref = ref }}
					style={ this.makeBaseStyle(this.props, 'https://images2.alphacoders.com/294/thumb-1920-29492.jpg') }
				>
				</div>
			</Transition>
			<Transition visible={!imageReady}>
				<div
					ref={ ref => { if (imageReady) this.ref = ref }}
					style={ this.makeBaseStyle(this.props, 'bg2.jpg') }
				>
				</div>
			</Transition>
		</div>
	}
}

export default ImageLayer

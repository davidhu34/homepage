import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Transition } from 'semantic-ui-react'

class MobileImageLayer extends Component {
	imageProportion = 1334/1060
	ref = {}
	state = {}
	baseStyle = {
		position: 'fixed',
		pointerEvents: 'none',
		top: 0,
		left:0,
		width: '100%',
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
	bannerCoverStyle = {
		WebkitBackgroundSize: 'contain',
		MozBackgroundSize: 'contain',
		OBbackgroundSize: 'contain',
		backgroundSize: 'contain'
	}

	// for head circle
	clipStyleAttr(width) {
		const clipR = width/8, clipRight = width*0.75, clipTop = width*0.18
		return {
			clipPath: 'circle('+clipR+'px at '+clipRight+'px '+clipTop+'px)'
		}
	}
	maskStyleAttr(fromPercent = 70, toPercent = 100, blur = 10) {
		return {
			maskImage: '-webkit-linear-gradient(to bottom, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			filter: 'brightness(80%)blur('+blur+'px)'
		}
	}
	wallStyleAttr(blur = 30) {
		return {
			filter: 'brightness(80%)blur('+blur+'px)'
		}
	}
	makeBaseStyle(props, imgUrl) {
		const { z, clip, mask, wall, clipR, clipTop, clipRight, width } = props

		let typeAttr = {}
		if (clip) {
			typeAttr = this.clipStyleAttr(width)
		} else if (mask) {
			typeAttr = this.maskStyleAttr()
		} else if (wall) {
			typeAttr = this.wallStyleAttr()
		}

		return {
			...this.baseStyle,
			height: mask || clip? (width/2)+'px': '100%',
			zIndex: z,
			background: 'url('+imgUrl+') no-repeat top left fixed',
			...typeAttr,
			...(mask || clip? this.bannerCoverStyle: this.coverStyle)
		}
	}
	render() {
		const { width, height, imageReady } = this.props

		return <div>
			<Transition visible={imageReady}>
				<div
					ref={ ref => { if (imageReady) this.ref = ref }}
					style={ this.makeBaseStyle(this.props, 'bg3.jpg') }
				>
				</div>
			</Transition>
			<Transition visible={!imageReady}>
				<div
					ref={ ref => { if (imageReady) this.ref = ref }}
					style={ this.makeBaseStyle(this.props, 'bgs.jpg') }
				>
				</div>
			</Transition>
		</div>
	}
}

export default MobileImageLayer

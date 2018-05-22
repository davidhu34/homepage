import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class ImageLayer extends Component {
	imageProportion = 3783/3007
	ref = {

	}
	state = {

	}
	// for head circle
	clipStyle(clipR, clipTop, clipRight) {
		return {
			clipPath: 'circle('+clipR+'px at '+clipRight+'px '+clipTop+'px)'
		}
	}
	maskStyle(fromPercent = 5, toPercent = 30, blur = 10) {
		return {
			maskImage: '-webkit-linear-gradient(to bottom, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			filter: 'brightness(80%) blur('+blur+'px)'
		}
	}
	wallStyle(blur = 20) {
		return {
			filter: 'blur('+blur+'px)'
		}
	}
	render() {
		const {
			clip, mask, wall,
			z, width, height,
			clipR, clipTop, clipRight
		} = this.props

		let addStyle = {}
		if (clip) {
			addStyle = this.clipStyle(clipR, clipTop, clipRight)
			console.log('clip style', addStyle)
		} else if (mask) {
			addStyle = this.maskStyle()
			console.log('mask style', addStyle)
		} else if (wall) {
			addStyle = this.wallStyle()
			console.log('wall style', addStyle)
		}
		return <div
			ref={ ref => {this.ref = ref}}
			style={{
				position: 'fixed',
				top: 0,
				left:0,
				width: '100%',
				height: '100%',
				zIndex: z,
				opacity: 1,
				background: 'url(bg2.jpg) no-repeat top right fixed',
				color: 'white',
				textAlign: 'center',

				...addStyle,

				WebkitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBbackgroundSize: 'cover',
				backgroundSize: 'cover',
			}}
		>
		</div>
	}
}

export default ImageLayer

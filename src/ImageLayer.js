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
	maskStyle(fromPercent = 5, toPercent = 20, blur = 10) {
		return {
			maskImage: '-webkit-linear-gradient(to bottom, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			WebkitMaskImage: '-webkit-linear-gradient(top, rgba(0,0,0,1) '+fromPercent+'%, rgba(0,0,0,0) '+toPercent+'%)',
			filter: 'brightness(80%)blur('+blur+'px)'
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
			clipR, clipTop, clipRight,
			imageReady
		} = this.props

		let addStyle = {}
		if (clip) {
			addStyle = this.clipStyle(clipR, clipTop, clipRight)
		} else if (mask) {
			addStyle = this.maskStyle()
		} else if (wall) {
			addStyle = this.wallStyle()
		}
		return <div
			ref={ ref => {this.ref = ref}}
			style={{
				transition: 'opacity 2s ease-in-out',
				position: 'fixed',
				top: 0,
				left:0,
				width: '100%',
				height: '100%',
				zIndex: z,
				opacity: 1,
				background: imageReady?
					'url(https://images2.alphacoders.com/294/thumb-1920-29492.jpg) no-repeat top right fixed'
					: 'url(bg2.jpg) no-repeat top right fixed',
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

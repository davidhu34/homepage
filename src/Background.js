import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ImageLayer from './ImageLayer'
import ContentLayer from './ContentLayer'

export default class Background extends Component {
    imageProportion = 3783/3007
    static propTypes = {
    }

    state = {
        width: 0,
        height: 0,
        imageReady: false
    }
    constructor(props) {
        super(props)
        const buffer = new Image(); // Here is the secret! :)
        buffer.onload = () => this.setState({ imageReady: true });
        buffer.src = 'https://images2.alphacoders.com/294/thumb-1920-29492.jpg';
    }
    updateDimensions(e) {
        console.log(e);
        const width = window.innerWidth
        const height = window.innerHeight
        const windowScale = width / height
		const scale = windowScale > this.imageProportion? windowScale : this.imageProportion
		const scaleH = height * scale
        const clipR = 0.12 * scaleH
		const clipTop = 0.18 * scaleH
		const clipRight = width - 0.25 * scaleH
        const contentWidth = width - 0.4 * scaleH
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            imageLayerProps: {
                width, height, clipR, clipTop, clipRight
            },
            contentLayerProps: {
                width, height, contentWidth
            },
        });
    }
    componentWillMount() {
        this.updateDimensions(null);
    }
    componentDidMount() {
        window.addEventListener("resize",this.updateDimensions.bind(this));

    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const { children, leftItems, rightItems } = this.props
        const { imageLayerProps, contentLayerProps, imageReady } = this.state

        return <div style={{
            position: 'absolute',
            top: 0,
            left:0,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            color: '#ffffff',
            //WebkitTextFillColor: 'transparent',
            //WebkitBackgroundClip: 'text'
    	}}>

            <ImageLayer wall z={-1} {...imageLayerProps} imageReady={imageReady}/>

            <ContentLayer z={0} {...contentLayerProps}/>
            <ImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>
            <ImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady}/>
        </div>
    }
}

import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ImageLayer from './ImageLayer'
export default class Background extends Component {
    imageProportion = 3783/3007
    static propTypes = {
    }

    state = {
        width:0,
        height:0,
    }
    constructor(props) {
        super(props)

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
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            imageLayerProps: {
                width, height, clipR, clipTop, clipRight
            }
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
        const { imageLayerProps } = this.state

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

            <ImageLayer wall z={-1} {...imageLayerProps}/>
            <h1>ew_________________________qrqwer</h1><br/><br/><br/><br/>
            <h1>e_________________________ wqrqwer</h1><br/>
            <h1>e_________________________   wqrqwer</h1><br/>
            <h1>ewq_________________________rqwer</h1><br/>
            <h1>ewqr_________________________  qwer</h1><br/>
            <ImageLayer mask z={2} {...imageLayerProps}/>
            <ImageLayer clip z={3} {...imageLayerProps}/>
        </div>
    }
}

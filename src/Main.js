import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'

import Parallax from 'react-springy-parallax'
import ImageLayer from './ImageLayer'
import ContentLayer from './ContentLayer'
import SideLayer from './SideLayer'

export default class Main extends Component {
    imageProportion = 1334/1060//3783/3007
    static propTypes = {
    }

    state = {
        width: 0,
        height: 0,
        imageReady: false
    }
    constructor(props) {
        super(props)
        const buffer = new Image();
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

    updateParallaxState(e) {
        const parallax = this.refs.parallax
        console.log('scroll',parallax);
        const thisIndex = Math.floor(parallax.current/parallax.space);
        if (this.state.parallaxIdx != thisIndex)
            this.setState({ parallaxIdx: thisIndex })
    }

    componentWillMount() {
        this.updateDimensions(null);
    }
    componentDidMount() {
        window.addEventListener("resize",this.updateDimensions.bind(this));
        const parallax = findDOMNode(this.refs.parallax);
        parallax.addEventListener("scroll",this.updateParallaxState.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this), true);
        const parallax = findDOMNode(this.refs.parallax);
        parallax.removeEventListener("scroll",this.updateParallaxState.bind(this));
    }
    handleNameVisibility(e, { calculations }) {
        this.setState({ nameVisibility: calculations })
    }
    render() {
        const { children, leftItems, rightItems } = this.props
        const { imageLayerProps, contentLayerProps, imageReady, parallaxIdx } = this.state
        const parallax = this.refs.parallax || {}
        console.log('parallaxIdx',parallaxIdx);
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

            <Parallax ref="parallax" pages={3}>
                <ContentLayer z={0} {...contentLayerProps} parallax={parallax} handleNameVisibility={(e, cal) => this.handleNameVisibility(e, cal)} />
            </Parallax>
            <SideLayer z={0} {...contentLayerProps}
                parallax={parallax}
                isNameVisible={parallaxIdx != 0}
                scrollHead={() => {
                    parallax.scrollTo(0)
                    console.log(parallax)
                }}
            />
            <ImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>
            {imageReady? <ImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady}/>: null}

        </div>
    }
}

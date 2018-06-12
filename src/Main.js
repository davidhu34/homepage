import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { Parallax } from 'react-spring'
import { Button, Header, Icon, Modal, Transition, Responsive } from 'semantic-ui-react'

import ImageLayer from './ImageLayer'
import MobileImageLayer from './MobileImageLayer'
import ContentLayer from './ContentLayer'
import SideLayer from './SideLayer'
import HeaderLayer from './HeaderLayer'
import CoverLayer from './CoverLayer'

export default class Main extends Component {
    imageProportion = 1334/1060//3783/3007
    static propTypes = {
    }
    parallax = null
    parallaxMobile = null
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

    updateParallaxMobileState(e) { this.updateParallaxState(e, true)}
    updateParallaxState(e, mobile) {
        const parallax = mobile? this.refs.parallaxMobile: this.refs.parallax
        const thisIndex = Math.round(parallax.current/parallax.space);

        console.log('parallaxIdx',thisIndex);
        if (this.state.parallaxIdx != thisIndex) {
            this.setState({ parallaxIdx: thisIndex })
        }
    }

    componentWillMount() {
        this.updateDimensions(null);
    }
    componentDidMount() {
        window.addEventListener("resize",this.updateDimensions.bind(this))
        this.parallax = findDOMNode(this.refs.parallax)
        this.parallaxMobile = findDOMNode(this.refs.parallaxMobile)
        if (this.parallax) this.parallax.addEventListener("scroll",this.updateParallaxState.bind(this))
        if (this.parallaxMobile) this.parallaxMobile.addEventListener("scroll",this.updateParallaxMobileState.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this), true)
        if (this.parallax) this.parallax.removeEventListener("scroll",this.updateParallaxState.bind(this))
    }
    handleNameVisibility(e, { calculations }) {
        this.setState({ nameVisibility: calculations })
    }
    render() {
        const { children, leftItems, rightItems } = this.props
        const { imageLayerProps, contentLayerProps, imageReady, parallaxIdx, isModalOpen } = this.state
        const parallax = this.refs.parallax || {}
        const parallaxMobile = this.refs.parallaxMobile || {}
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
        <Responsive maxWidth={Responsive.onlyComputer.minWidth}>
            <MobileImageLayer wall mobile z={-1} {...imageLayerProps} imageReady={imageReady}/>

            <div style={{ filter: isModalOpen? 'blur(20px)': '' }}>
                <Parallax ref="parallaxMobile" pages={3}>
                    <ContentLayer mobile z={0} {...contentLayerProps} parallax={parallaxMobile} />
                </Parallax>
            </div>

            <MobileImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>

            <Transition visible={imageReady && !isModalOpen}>
                <div>
                    <MobileImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady} />
                </div>
            </Transition>
        </Responsive>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <ImageLayer wall z={-1} {...imageLayerProps} imageReady={imageReady}/>

            <div style={{ filter: isModalOpen? 'blur(20px)': '' }}>
                <Parallax ref="parallax" pages={3}>
                    <ContentLayer z={0} {...contentLayerProps} parallax={parallax} />
                </Parallax>
                <SideLayer {...contentLayerProps}
                    z={1}
                    openModal={ () => this.setState({isModalOpen: true}) }
                    isModalOpen={isModalOpen}
                    parallax={parallax}
                    isNameVisible={Boolean(parallaxIdx)}
                    scrollHead={() => {
                        parallax.scrollTo(0)
                        console.log(parallax)
                    }}
                />
                <HeaderLayer parallaxIdx={parallaxIdx}>
                </HeaderLayer>
            </div>

            <ImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>

            <Transition visible={imageReady && !isModalOpen}>
                <div>
                    <ImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady} />
                </div>
            </Transition>


            {isModalOpen? <CoverLayer close={ () => this.setState({isModalOpen: false}) } show={isModalOpen}/>: null}
        </Responsive>
        </div>
    }
}

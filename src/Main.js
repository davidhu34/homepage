import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { Parallax } from 'react-spring'
import { Button, Header, Icon, Modal, Transition, Responsive } from 'semantic-ui-react'


import WideLayout from './WideLayout'
import MobileLayout from './MobileLayout'

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
    updateModal(val) {
        this.setState({isModalOpen: val})
    }

    componentWillMount() {
        this.updateDimensions(null);
    }
    componentDidMount() {
        window.addEventListener("resize",this.updateDimensions.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this), true)
    }
    handleNameVisibility(e, { calculations }) {
        this.setState({ nameVisibility: calculations })
    }
    render() {
        const { width } = this.state
        const isMobile = width < Responsive.onlyComputer.minWidth

        const closeModal = () => this.updateModal(false);
        const openModal = () => this.updateModal(true);

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
        <Responsive maxWidth={Responsive.onlyComputer.minWidth-1}>
            <MobileLayout
                isMobile={isMobile}
                {...this.state}
                closeModal={closeModal}
                openModal={openModal}/>
        </Responsive>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <WideLayout
                isMobile={isMobile}
                {...this.state}
                closeModal={closeModal}
                openModal={openModal}/>
        </Responsive>
        </div>
    }
}

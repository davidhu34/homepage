import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { Parallax } from 'react-spring'
import { Button, Header, Icon, Modal, Transition, Responsive } from 'semantic-ui-react'

import MobileImageLayer from './MobileImageLayer'
import MobileBannerLayer from './MobileBannerLayer'
import ContentLayer from './ContentLayer'
import CoverLayer from './CoverLayer'

export default class MobileLayout extends Component {
    imageProportion = 1334/1060//3783/3007
    parallax = null

    state = {}
    updateParallaxState(e) {
        const parallax = this.refs.parallax
        const thisIndex = Math.round(parallax.current/parallax.space);
        if (this.state.parallaxIdx != thisIndex) {
            this.setState({ parallaxIdx: thisIndex })
        }
    }

    updateParallaxRef() {
        this.parallax = findDOMNode(this.refs.parallax)
        if (this.parallax) this.parallax.addEventListener("scroll",this.updateParallaxState.bind(this))
    }
    componentDidMount() {
        this.updateParallaxRef();
    }
    componentWillUnmount() {
        if (this.parallax) this.parallax.removeEventListener("scroll",this.updateParallaxState.bind(this))
    }

    render() {
        const { width, imageLayerProps, contentLayerProps, imageReady, isModalOpen, closeModal, openModal, modal, isMobile } = this.props
        const { parallaxIdx } = this.state

        const parallax = this.refs.parallax || {}

        return <div>

            <MobileImageLayer wall mobile z={-1} {...imageLayerProps} imageReady={imageReady}/>

            <div style={{ filter: isModalOpen? 'blur(20px)': '' }}>
                <Parallax ref="parallax" pages={3}>
                <ContentLayer mobile
                    {...contentLayerProps}
                    z={0}
                    parallax={parallax}
                    scrollParallax={ (i) => {
                        if (parallax.scrollTo) parallax.scrollTo(i)
                    }} />
                </Parallax>
                <MobileBannerLayer {...contentLayerProps}
                    z={3}
                    openModal={ openModal }
                    isModalOpen={isModalOpen}
                    parallax={parallax}
                    isNameVisible={Boolean(parallaxIdx)}
                    scrollHead={() => {
                        parallax.scrollTo(0)
                    }}
                />
            </div>
            <Transition visible={imageReady && !isModalOpen}>
                <div>
                    <MobileImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>
                    <MobileImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady} />
                </div>
            </Transition>
            {isModalOpen? <CoverLayer mobile width={width} modal={ modal } close={ closeModal } show={isModalOpen}/>: null}

        </div>
    }
}

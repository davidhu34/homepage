import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { Parallax } from 'react-spring'
import { Button, Header, Icon, Modal, Transition, Responsive } from 'semantic-ui-react'

import ImageLayer from './ImageLayer'
import ContentLayer from './ContentLayer'
import SideLayer from './SideLayer'
import HeaderLayer from './HeaderLayer'
import CoverLayer from './CoverLayer'

export default class WideLayout extends Component {
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
        const { imageLayerProps, contentLayerProps, imageReady, isModalOpen, closeModal,openModal, isMobile } = this.props
        const { parallaxIdx } = this.state

        const parallax = this.refs.parallax || {}

        return <div>
            <ImageLayer wall z={-1} {...imageLayerProps} imageReady={imageReady}/>

            <div style={{ filter: isModalOpen? 'blur(20px)': '' }}>
                <Parallax ref="parallax" pages={3}>
                    <ContentLayer z={0}
                        {...contentLayerProps}
                        parallax={parallax}
                        scrollParallax={ (i) => {
                            console.log(parallax)
                            if (parallax.scrollTo) parallax.scrollTo(i)
                        }} />
                </Parallax>
                <SideLayer {...contentLayerProps}
                    z={1}
                    openModal={ openModal }
                    isModalOpen={isModalOpen}
                    parallax={parallax}
                    isNameVisible={Boolean(parallaxIdx)}
                    scrollHead={() => {
                        parallax.scrollTo(0)
                    }}
                />
                {this.isMobile? null: <HeaderLayer parallaxIdx={parallaxIdx} />}
            </div>

            <ImageLayer mask z={2} {...imageLayerProps} imageReady={imageReady}/>

            <Transition visible={imageReady && !isModalOpen}>
                <div>
                    <ImageLayer clip z={3} {...imageLayerProps} imageReady={imageReady} />
                </div>
            </Transition>


            {isModalOpen? <CoverLayer close={ closeModal } show={isModalOpen}/>: null}

        </div>
    }
}

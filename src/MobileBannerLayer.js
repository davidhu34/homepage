import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'
import {Parallax} from 'react-spring'
import ImageWrap from './ImageWrap'

class MobileBannerLayer extends Component {
    static propTypes = {
    }

    state = {
        nameVisibility: {}
    }

    handleNameVisibility(e, { calculations }) {
        this.setState({ nameVisibility: calculations })
    }

    render() {
        const { z, width, height, contentWidth, isNameVisible, parallax, scrollHead, isModalOpen, openModal } = this.props
        
        const space = width/20
        return <div
            style={{
                height: (width/2)+'px',
                color: '#ffffff',
                zIndex: z,
                textAlign: 'left',
                position:'fixed',
                left: '2rem',
                top: '2rem'
            }}
        >


            <div
                style={{
                    paddingTop: 2*space+'px',
                    paddingBottom: space+'px',
                    fontSize: 1.5*space+'px'
                }}
                onClick={ () => {
                    parallax.scrollTo(0)
                }}
            >
                MING WEI HU
            </div>
            <Transition visible={isNameVisible}>
                <span>
                    <div
                        style={{
                            padding: space/2+'px',
                            fontSize: space+'px'
                        }}
                        onClick={ (e) => openModal('CONTACT') }
                    >
                        contact me
                    </div>
                    <div
                        style={{
                            padding: space/2+'px',
                            fontSize: space+'px'
                        }}
                        onClick={ (e) => openModal('RESUME') }
                    >
                        Resume
                    </div>
                </span>
            </Transition>
        </div>
    }
}
export default MobileBannerLayer

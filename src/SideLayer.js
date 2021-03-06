import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'
import {Parallax} from 'react-spring'
import ImageWrap from './ImageWrap'

class SideLayer extends Component {
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
        
        return <Container
                style={{
                    zIndex: z,
                    height: height,
                    textAlign: 'right',
                    color: '#ffffff',
               }}
            >
                <div
                    style={{
                        width: '500px',
                        position:'fixed',
                        right: 100,
                        bottom: 100
                    }}
                >
                    <Transition visible={isNameVisible}>
                        <h1 onClick={ () => {
                            parallax.scrollTo(0)
                        }}>
                            MING WEI HU
                        </h1>
                    </Transition>
                    <h2 onClick={ (e) => openModal('CONTACT') }>
                        contact me
                    </h2>
                    <h2 onClick={ (e) => openModal('RESUME') }>
                        Resume
                    </h2>
                </div>
            </Container>
    }
}
export default SideLayer

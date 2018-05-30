import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
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
        const { z, width, height, contentWidth, isNameVisible, parallax, scrollHead } = this.props
        console.log(parallax? parallax.offset:'w')
        return <Container
                style={{
                    height: height,
                    textAlign: 'right',
                    color: '#ffffff',
               }}
            >
                <div
                    style={{
                        width: '500px',
                        position:'fixed',
                        right: 0,
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
                    <h2>contact me</h2>
                    <h2>Resume</h2>
                </div>
                </Container>
    }
}
export default SideLayer

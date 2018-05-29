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
        const { z, width, height, contentWidth, nameVisibility, scrollHead } = this.props
        console.log(height)
        return <Grid>
            <Grid.Row>
            <Grid.Column
                style={{
                    width: contentWidth+'px',
                    textAlign: 'center',
                    color: '#ffffff',
               }}
            >
            </Grid.Column>
          <Grid.Column
                style={{
                    height: height,
                    textAlign: 'right',
                    color: '#ffffff',
               }}
            >
                <Container>
                <div
                    style={{
                        width: '500px',
                        position:'fixed',
                        bottom: 100
                    }}
                >
                    <Transition visible={nameVisibility&&nameVisibility.offScreen}>
                        <h1 onClick={ () => scrollHead() }>
                            MING WEI HU
                        </h1>
                    </Transition>
                    <h2>contact me</h2>
                    <h2>Resume</h2>
                </div>
                </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    }
}
export default SideLayer

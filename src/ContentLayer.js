import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import ImageWrap from './ImageWrap'

class ContentLayer extends Component {
    static propTypes = {
    }

    state = {
        nameVisibility: {}
    }

    handleNameVisibility(e, { calculations }) {
        this.setState({ nameVisibility: calculations })
    }

    render() {
        const { z, width, height, contentWidth, parallax, handleNameVisibility } = this.props
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
                <Container textAlign="center">


                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    onClick={() => parallax.scrollTo(1)}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Visibility onUpdate={(e, calculations) => {
                            handleNameVisibility(e, calculations)
                            this.handleNameVisibility(e, calculations)
                        }}>
                            <div style={{
                                fontSize: '8rem',
                                textAlign: 'center',
                                color: '#ffffff',
                        	}}>
                                {'Ming Wei Hu'}
                            </div>
                        </Visibility>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    onClick={() => parallax.scrollTo(2)}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    <Grid columns={5} >
                        <Grid.Column />
                        <Grid.Column>
                            <Segment basic>
                                <h1>CV</h1>
                            </Segment>
                        </Grid.Column>
                        <Divider vertical></Divider>
                        <Grid.Column>
                            <Segment basic>
                                <h1>CV</h1>
                            </Segment>
                        </Grid.Column>
                        <Divider vertical></Divider>
                        <Grid.Column>
                            <Segment basic>
                                <h1>CV</h1>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column />
                    </Grid>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    onClick={() => parallax.scrollTo(0)}>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h1>ew_________________________qrqwer</h1><br/><br/><br/><br/>
                    <h1>e_________________________ wqrqwer</h1><br/>
                    <h1>e_________________________   wqrqwer</h1><br/>
                    <h1>ewq_________________________rqwerasdffffffsadfsadfasdfasd</h1><br/>
                    <h1>ewqr_________________________  qwer</h1><br/>
                    <br/>
                    <h1>ew_________________________qrqwer</h1><br/><br/><br/><br/>
                    <h1>e_________________________ wqrqwer</h1><br/>
                    <h1>e_________________________   wqrqwer</h1><br/>
                    <h1>ewq_________________________rqwerasdffffffsadfsadfasdfasd</h1><br/>
                    <h1>ewqr_________________________  qwer</h1><br/>
                    <br/>
                    <h1>ew_________________________qrqwer</h1><br/><br/><br/><br/>
                    <h1>e_________________________ wqrqwer</h1><br/>
                    <h1>e_________________________   wqrqwer</h1><br/>
                    <h1>ewq_________________________rqwerasdffffffsadfsadfasdfasd</h1><br/>
                    <h1>ewqr_________________________  qwer</h1><br/>
                    <br/>
                    <h1>ew_________________________qrqwer</h1><br/><br/><br/><br/>
                    <h1>e_________________________ wqrqwer</h1><br/>
                    <h1>e_________________________   wqrqwer</h1><br/>
                    <h1>ewq_________________________rqwerasdffffffsadfsadfasdfasd</h1><br/>
                    <h1>ewqr_________________________  qwer</h1><br/>
                </Parallax.Layer>








                </Container>
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
                    <Transition visible={this.state.nameVisibility.offScreen}>
                        <h1 onClick={() => parallax.scrollTo(0)}>
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
export default ContentLayer

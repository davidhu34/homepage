import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'
import {Parallax} from 'react-spring'
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
    updateParallaxState(e) {
        console.log('on scroll',e);
    }

    render() {
        const { z, width, height, contentWidth, parallax, mobile } = this.props
        console.log(height)
        return <Grid onScroll={(e) => this.updateParallaxState(e)} >
            <Grid.Row>
            <Grid.Column
                style={{
                    width: mobile? '100%': contentWidth+'px',
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
                            <div style={{
                                fontSize: '8rem',
                                textAlign: 'center',
                                color: '#ffffff',
                        	}}>
                                {'Ming Wei Hu'}
                            </div>
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
                        <Grid.Column>
                            <Segment basic>
                                <h1>CV</h1>
                            </Segment>
                        </Grid.Column>
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

            </Grid.Row>
        </Grid>
    }
}
export default ContentLayer

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Visibility, Sticky, Transition } from 'semantic-ui-react'

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
        const { z, width, height, contentWidth } = this.props
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


                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Visibility onUpdate={(e, calculations) => this.handleNameVisibility(e, calculations)}>
                        <div style={{
                            fontSize: '8rem',
                            textAlign: 'center',
                            color: '#ffffff',
                    	}}>
                            {'Ming Wei Hu'}
                        </div>
                    </Visibility>
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
                        <h1>MING WEI HU</h1>
                    </Transition>
                    <h2>b01901133@gmail.com</h2>
                </div>
                </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    }
}
export default ContentLayer

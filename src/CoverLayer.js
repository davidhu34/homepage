import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Transition, Grid } from 'semantic-ui-react'

class CoverLayer extends Component {
    backgroundStyle = {
        position: 'fixed',
        top: 0,
        left:0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        opacity: '10%',
        overflowY:'scroll',
        zIndex: 90
    }
    contentStyle = {
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        zIndex: 91,
    }
    render() {
        const { show, close } = this.props
        return <Transition visible={show}>
            <div style={this.backgroundStyle}>
                <Grid style={{height:'100%'}} containter={true}>
                    <Grid.Row>
                      <Grid.Column width={13}>
                        <div style={ this.contentStyle }>
            					<h1>sadfkewqf</h1>
                                <br/><br/><br/><br/>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <h1>ew___________________asdfsadfsadfasdfasdfsafdasdfsadfasdfasdfsadfsadfsad______qrqwer</h1><br/><br/><br/><br/>
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
            			</div>
                    </Grid.Column>
                      <Grid.Column width={3}>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
                    <div width
                        style={{

                            position: 'fixed',
                            right: 100,
                            bottom: 100
                        }}
                    >
                        <h2 onClick={ () => close() }>Back</h2>
                    </div>
            </div>
        </Transition>
    }
}
export default CoverLayer

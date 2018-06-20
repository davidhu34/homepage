import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Transition, Grid, Icon, Item } from 'semantic-ui-react'
import { Spring } from 'react-spring'

class ResumeModal extends Component {
    state = {}
    render() {
        const { show, close } = this.props
        const hover = this.state.hover || {}

        return <Grid style={{height:'100%', width: '100%'}} container={true}>
            <Grid.Row>
                <Grid.Column width={16}>
                    <div>
                        <h3>Education</h3>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <div>
                        <p>qwegqegw</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div>
                        <p>fsadewqte</p>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <div>
                        safwqeg
                    </div>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    }
}
export default ResumeModal

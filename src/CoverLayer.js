import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Transition } from 'semantic-ui-react'

class CoverLayer extends Component {
    backgroundStyle = {
        position: 'fixed',
        top: 0,
        left:0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        opacity: '10%',
        zIndex: 90
    }
    contentStyle = {
        position: 'fixed',
        top: 0,
        left:0,
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        zIndex: 91
    }
    render() {
        const { show, close } = this.props
        return <div style={this.backgroundStyle} onClick={ () => close() }>
            <Transition visible={show}>
    			<div style={ this.contentStyle }>
    					<h1>sadfkewqf</h1>
    			</div>
            </Transition>
        </div>
    }
}
export default CoverLayer

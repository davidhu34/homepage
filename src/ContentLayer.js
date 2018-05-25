import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContentLayer extends Component {
    static propTypes = {
    }

    state = {
    }

    render() {
        const { z, width, height, contentWidth } = this.props
        console.log(this.props)
        return <div style={{
            width: contentWidth+'px',
            textAlign: 'center',
            color: '#ffffff',
    	}}>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={{
                fontSize: '8rem',
                textAlign: 'center',
                color: '#ffffff',
        	}}>
                {'Ming Wei Hu'}
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>CV | Experience | contact</h1><br/><br/><br/><br/>
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
    }
}

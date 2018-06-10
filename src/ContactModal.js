import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Transition, Grid, Icon, Item } from 'semantic-ui-react'
import { Spring } from 'react-spring'
class ContactModal extends Component {
    state = {}

    rows = [{
        key: ' mail',
        icon: 'mail',
        content: 'b01901133@gmail.com',
        link: ''
    },{
        key: ' cell',
        icon: 'call',
        content: '+886937507612',
        link: ''
    },{
        key: 'location',
        icon: "map marker alternate",
        content: 'Taipei, Taiwan',
        link: ''
    }]

    initStyle = { color: 'rgba(255,255,255,0)' }
    normalStyle = { color: 'rgba(255,255,255,0.5)' }
    hoverStyle = { color: 'rgba(255,255,255,1)' }

    updateHover(key, hover) {
        this.setState({
            hover: {
                ...this.state.hover,
                [key]: hover
            }
        })
    }
    render() {
        const { show, close } = this.props
        const hover = this.state.hover || {}

        return <Item.Group>
            <div style={{height: '10rem'}} />
            {this.rows.map(
                row => {
                    const content = style => (
                        <a style={style}>
                            <h1>
                                <Icon name={row.icon} />
                                {row.content}
                            </h1>
                        </a>
                    )
                    return <Item key={row.key}
                        onMouseEnter={(e) => this.updateHover(row.key, true)}
                        onMouseLeave={(e) => this.updateHover(row.key, false)}>
                        <Item.Content verticalAlign='middle' horizontalAlign="right">
                            <Spring
                                toggle={ hover[row.key] }
                                from={ this.initStyle }
                                to={ hover[row.key]? this.hoverStyle: this.normalStyle }
                                children={content}
                            />
                        </Item.Content>
                        <div style={{height: '5rem'}} />
                    </Item>
                }
            )}


        </Item.Group>
    }
}
export default ContactModal

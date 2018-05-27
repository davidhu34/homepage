import React from 'react'
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'

import { CustomMessage, Navbar } from 'components'
import Main from './Main'
import 'styling/semantic.less'

const App = () => (
    <div style={{
        width: '100%',
        height: '100%'
	}}>
        <Main />
    </div>
)

export default App

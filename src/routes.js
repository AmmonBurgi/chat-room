import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth'
import ChatRoom from './Components/ChatRoom'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/chat' component={ChatRoom} />
    </Switch>
)
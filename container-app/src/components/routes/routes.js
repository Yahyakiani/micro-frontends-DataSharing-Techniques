import React from 'react'
import { Route,Switch } from 'react-router-dom'
import { Home } from '../../Home'
import { contactUs } from '../inputForms/contactUs'
import  myAccountForm  from '../inputForms/myAccount'
import { Time } from '../time/time'

export const Routes = () => {
    return (
        <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/account" component={myAccountForm} />
                <Route exact path="/time" component={Time} />
                <Route exact path="/contactUs" component={contactUs} />
              </Switch>
    )
}

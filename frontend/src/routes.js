import React from "react";
import {Route} from "react-router-dom";

import PrivateRoute from './components/Base/PrivateRoute';

import Task from './components/Task/App'
import {About} from './components/About/App'
import {Topics} from './components/Topics/App'
import Benefits from './components/Benefits/App'
import Accounts from './components/Accounts/App'

export const Routes = (props) => {

    return (
        <div>
            <Route exact path="/" component={Task} />
            <Route
                path="/about"
                render={(routeProps) => (
                    <About {...routeProps} {...props} />
                )}
            />
            <Route path="/topics" component={Topics} />
            <PrivateRoute path="/benefits" component={Benefits} />
            <Route path="/auth" component={Accounts} />
        </div>
    );
}
import React from "react";
import {Route} from "react-router-dom";

import Task from './components/Task/App'
import {About} from './components/About/App'
import {Topics} from './components/Topics/App'
import Benefits from './components/Benefits/App'

export const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Task} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/benefits" component={Benefits} />
        </div>
    );
}
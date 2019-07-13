import React from "react";
import {Route} from "react-router-dom";

import Task from './components/Task/App'
import {About} from './components/About/App'
import {Topics} from './components/Topics/App'

export const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Task} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    );
}
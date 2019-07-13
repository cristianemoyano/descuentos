import React from "react";
import {Route, Link } from "react-router-dom";

import BaseLayout from '../Base/BaseLayout'

import {APP_COMPONENT_TEXTS} from './constants'

const Topic = ({ match }) => {
    return (
        <h3 className="text-uppercase text-center my-4">
            {APP_COMPONENT_TEXTS.requestParam} {match.params.id}
        </h3>
    );
}

export const Topics = ({ match }) => {
    return (
        <BaseLayout title='Topics'>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`${match.url}/components`}>{APP_COMPONENT_TEXTS.components}</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`${match.url}/props-v-state`}>{APP_COMPONENT_TEXTS.other}</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />

            <Route
                exact
                path={match.path}
                render={
                () => (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {APP_COMPONENT_TEXTS.default}
                    </li>
                </ul>
                )
            }
            />
        </BaseLayout>
    );
}
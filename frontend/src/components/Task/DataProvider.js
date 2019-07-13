import React, { Component } from 'react';

import ConnectedLayout from '../../containers/Task/ConnectedLayout';

import {DATA_PROVIDER_COMPONENT_TEXTS} from './constants'


class DataProvider extends Component {

    _fetchElements = () => {
        this.props.getTasks();
    }

    componentDidMount() {
        this._fetchElements();
    }

    render() {
        const { tasks } = this.props;

        return (
            <ConnectedLayout
                data={tasks}
                placeholder={DATA_PROVIDER_COMPONENT_TEXTS.placeholder}
                title={DATA_PROVIDER_COMPONENT_TEXTS.title}
                {...this}
            />
        );
    }
}

export default DataProvider;
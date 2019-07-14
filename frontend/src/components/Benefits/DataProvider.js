import React, { Component } from 'react';

import ConnectedLayout from '../../containers/Benefits/ConnectedLayout';

import {DATA_PROVIDER_COMPONENT_TEXTS} from './constants'


class DataProvider extends Component {

    _fetchElements = () => {
        this.props.getBenefits();
    }

    componentDidMount() {
        this._fetchElements();
    }

    render() {
        const { benefits } = this.props;

        return (
            <ConnectedLayout
                data={benefits}
                placeholder={DATA_PROVIDER_COMPONENT_TEXTS.placeholder}
                title={DATA_PROVIDER_COMPONENT_TEXTS.title}
                {...this}
            />
        );
    }
}

export default DataProvider;
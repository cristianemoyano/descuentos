import React, { Component } from 'react';

import ConnectedLayout from '../../containers/Accounts/ConnectedLayout';

import {DATA_PROVIDER_COMPONENT_TEXTS} from './constants'


class DataProvider extends Component {

    render() {
        const { accounts } = this.props;

        return (
            <ConnectedLayout
                data={accounts}
                placeholder={DATA_PROVIDER_COMPONENT_TEXTS.placeholder}
                title={DATA_PROVIDER_COMPONENT_TEXTS.title}
                {...this.props}
            />
        );
    }
}

export default DataProvider;
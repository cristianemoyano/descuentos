import React, { Component } from 'react';

import ConnectedLayout from '../containers/ConnectedLayout';


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
                placeholder='No hay tareas'
                title='Descuentos'
                {...this}
            />
        );
    }
}

export default DataProvider;
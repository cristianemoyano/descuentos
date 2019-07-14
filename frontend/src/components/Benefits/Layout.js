import React, { Component } from 'react';

import Modal from './Modal'
import ConnectedItems from '../../containers/Benefits/ConnectedItems'
import BaseLayout from '../Base/BaseLayout'

import {LAYOUT_COMPONENT_TEXTS} from './constants'


class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                title: "",
                description: "",
                completed: false
            },
        };
    }

    createItem = () => {
        const item = { title: "", description: "", completed: false };
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleSubmit = item => {
        this.toggle();
        this.props.addBenefit(item);
    };

    render() {
        const { data, placeholder, title } = this.props;

        let table = data.benefits.length ? (
            <div>
                <ConnectedItems
                    items={data.benefits}
                />
            </div>
        ) : (
            <div className="list-group-item d-flex justify-content-between align-items-center">
                {placeholder}
                <button onClick={this.createItem} className="btn btn-primary">
                      {LAYOUT_COMPONENT_TEXTS.add}
                </button>
            </div>
        );

        let modal = this.state.modal ? (
            <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
            />
        ) : (
            null
        );

        return (
            <BaseLayout title={title}>
                  <ul className="list-group list-group-flush">
                    {table}
                    {modal}
                  </ul>
            </BaseLayout>
        );
    }
}

export default Layout;




    
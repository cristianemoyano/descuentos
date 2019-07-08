import React, { Component } from 'react';

import Modal from '../components/Modal'
import ConnectedItems from '../containers/ConnectedItems'


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
        this.props.addTask(item);
    };

    render() {
        const { data, placeholder, title } = this.props;

        let table = data.tasks.length ? (
            <div>
                <ConnectedItems
                    items={data.tasks}
                />
            </div>
        ) : (
            <div className="list-group-item d-flex justify-content-between align-items-center">
                {placeholder}
                <button onClick={this.createItem} className="btn btn-primary">
                      Add task
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
            <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">{title}</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <ul className="list-group list-group-flush">
                    {table}
                    {modal}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
    }
}

export default Layout;




    
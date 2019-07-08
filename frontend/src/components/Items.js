import React, { Component } from "react";
import Modal from '../components/Modal'

export default class Items extends Component {

        constructor(props) {
            super(props);
            this.state = {
                viewCompleted: false,
                modal: false,
                activeItem: {
                    title: "",
                    description: "",
                    completed: false
                },
            };
        }

        editItem = item => {
            this.setState({ activeItem: item, modal: !this.state.modal });
        };
    
        handleDelete = item => {
            this.props.deleteTask(item.id);
        };

        toggle = () => {
            this.setState({ modal: !this.state.modal });
        };

        createItem = () => {
            const item = { title: "", description: "", completed: false };
            this.setState({ activeItem: item, modal: !this.state.modal });
        };

        handleSubmit = item => {
            this.toggle();
            debugger
            if (item.id) {
                this.props.editTask(item);
                return;
            } else {
                this.props.addTask(item);
            }

        };

        displayCompleted = status => {
            if (status) {
              return this.setState({ viewCompleted: true });
            }
            return this.setState({ viewCompleted: false });
        };

        renderTabList = () => {
            return (
              <div className="my-5 tab-list">
                <span
                  onClick={() => this.displayCompleted(true)}
                  className={this.state.viewCompleted ? "active" : ""}
                >
                  complete
                </span>
                <span
                  onClick={() => this.displayCompleted(false)}
                  className={this.state.viewCompleted ? "" : "active"}
                >
                  Incomplete
                </span>
              </div>
            );
        };
    
        render() {
            const { tasks } = this.props;
            const { viewCompleted } = this.state;

            const newItems = tasks.filter(
                item => item.completed === viewCompleted
            );

            let items = newItems.map(
                    item => (
                        <li
                            key={item.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span
                                className={`todo-title mr-2 ${
                                    this.state.viewCompleted ? "completed-todo" : ""
                                }`}
                                title={item.description}
                            >
                                {item.title}
                            </span>
                            <span>
                                <button
                                    onClick={() => this.editItem(item)}
                                    className="btn btn-secondary mr-2"
                                >
                                    {" "}
                                    Edit{" "}
                                </button>
                                <button
                                    onClick={() => this.handleDelete(item)}
                                    className="btn btn-danger"
                                >
                                    Delete{" "}
                                </button>
                            </span>
                        </li>
                    )
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
                <div className="column">
                    <button onClick={this.createItem} className="btn btn-primary">
                      Add task
                    </button>
                    {this.renderTabList()}
                    {items}
                    {modal}
                </div>
            );
        }
    }
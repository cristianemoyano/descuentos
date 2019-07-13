import React, { Component } from "react";

import Modal from './Modal'
import {ItemCard} from './ItemCard'
import {FilterTab} from './FilterTab'
import {ITEMS_COMPONENT_TEXTS} from './constants'


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
    
        render() {
            const { tasks } = this.props;
            const { viewCompleted } = this.state;

            const newItems = tasks.filter(
                item => item.completed === viewCompleted
            );

            let items = newItems.map(
                item => (
                    <ItemCard
                        item={item}
                        viewCompleted={viewCompleted}
                        onEdit={this.editItem}
                        onDelete={this.handleDelete}
                    />
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
                        {ITEMS_COMPONENT_TEXTS.addTask}
                    </button>
                    <FilterTab
                        viewCompleted={this.state.viewCompleted}
                        displayCompleted={this.displayCompleted}
                    />
                    {items}
                    {modal}
                </div>
            );
        }
    }
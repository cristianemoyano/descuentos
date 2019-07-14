import React, { Component } from "react";

import { Row, Col } from 'reactstrap';

import Modal from './Modal'
import {ItemCard} from './ItemCard'

export default class Items extends Component {

        constructor(props) {
            super(props);
            this.state = {
                modal: false,
                activeItem: {
                    title: "",
                    description: "",
                    completed: false
                },
            };
        }

        viewItem = item => {
            this.setState({ activeItem: item, modal: !this.state.modal });
        };
    
        handleDelete = item => {
            this.props.deleteBenefit(item.id);
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
                this.props.editBenefit(item);
                return;
            } else {
                this.props.addBenefit(item);
            }

        };

        displayCompleted = status => {
            if (status) {
              return this.setState({ viewCompleted: true });
            }
            return this.setState({ viewCompleted: false });
        };

        validBenefits = item => {
            const today = new Date();
            const expiration = new Date(item.expiration);
            const noExpiration = new Date(null); 
            return (expiration.getTime() > today.getTime() || expiration.getTime() === noExpiration.getTime())
        };
    
        render() {
            const { benefits } = this.props;
            
            const validBenefits = benefits.filter(this.validBenefits);

            let items = validBenefits.map(
                item => (
                    <Col sm="3" key={item.id}>
                        <ItemCard
                            key={item.id}
                            item={item}
                            onView={this.viewItem}
                        />
                    </Col>
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
                    <Row>
                        {items}
                    </Row>
                    {modal}
                </div>
            );
        }
    }
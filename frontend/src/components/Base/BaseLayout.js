import React, { Component } from 'react';

import {
    Container,
    Row,
} from "reactstrap";

import Header from './Header'


export default class BaseLayout extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Header
                    title={this.props.title}
                />
                <Row>
                    <div className="mx-auto p-0">
                        <div className="card p-5">
                            {this.props.children}
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}
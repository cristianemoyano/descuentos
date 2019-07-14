import React, { Component } from 'react';

import {Link, Redirect} from 'react-router-dom';

import BaseLayout from '../Base/BaseLayout'
import { isLogin } from "../Base/utils";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }
    componentDidMount() {
        if (this.props.auth.token) {
            this.props.fetchUser(this.props.auth);
        }
    }
    handleChange = e => this.setState({
        [e.target.name]: e.target.value,
    });
    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    render() {

        if (this.props.auth.isAuthenticated || isLogin()) {
            return <Redirect to="/benefits" />;
        }
        const { username, email, password, password2 } = this.state;

        return (
            <BaseLayout title='Register'>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Enter Todo description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder=""
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password2">Confirm Password</Label>
                        <Input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={this.handleChange}
                        placeholder=""
                        />
                    </FormGroup>
                    <Button color="success" onClick={this.handleSubmit}>
                        Register
                    </Button>
                    <p>
                        Already have a account ? <Link to="/login">Login</Link>
                    </p>
                </Form>
            </BaseLayout>
        );
    }
}

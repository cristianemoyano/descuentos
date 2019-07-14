import React, { Component } from 'react';

import {Link, Redirect} from 'react-router-dom';

import BaseLayout from '../Base/BaseLayout'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class Login extends Component {
    state = {
        username: '',
        password: '',
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
        this.props.login(this.state.username, this.state.password);
    }

    render() {

        if (this.props.auth.isAuthenticated) {
            return <Redirect to="/benefits" />;
        }
        const { username, password } = this.state;
        
        return (
            <BaseLayout title='Login'>
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
                        <Label for="password">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder=""
                        />
                    </FormGroup>
                    <Button color="success" onClick={this.handleSubmit}>
                        Login
                    </Button>
                    <p>
                        Don't have a account ? <Link to="/register">Register</Link>
                    </p>
                </Form>
            </BaseLayout>
        );
    }
}

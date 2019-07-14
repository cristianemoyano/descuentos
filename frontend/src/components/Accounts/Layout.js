import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";

import Register from './Register';
import Login from './Login';


const AuthComponent = (props) => {
    const {pathname} = props.props.location;

    if (pathname === '/auth/register') {
        return < Register {...props}/>;
    }
    if (pathname === '/auth/login') {
        return <Login {...props} />;
    }

    if (pathname === '/auth/logout') {
        props.logout();
        return <Redirect to="/auth/login" />;
    }
    

    return (
        <h3 className="text-uppercase text-center my-4">
           {pathname}
        </h3>
    );
}

const Auth = ({ props, login, auth, fetchUser, logout }) => {
    const {match} = props;

    return (
        <div>
            <Route
                path={`${match.path}/:id`}
                render={
                () => (
                    <AuthComponent login={login} logout={logout} fetchUser={fetchUser} auth={auth} {...props} />
                )
            }
            />
        </div>
    );
}

export default class Layout extends Component {

    render() {
        return (
            <div>
                <Auth {...this.props}/>
            </div>
        );
    }
}

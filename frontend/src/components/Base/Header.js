import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <header>
                <h1 className="text-white text-uppercase text-center my-4">
                    {title}
                </h1>
            </header>
        );
    }
}

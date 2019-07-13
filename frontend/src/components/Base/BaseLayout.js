import React, { Component } from 'react';
import Header from './Header'

export default class BaseLayout extends Component {
    render() {
        return (
            <main className="content">
                    <Header
                        title={this.props.title}
                    />
                <div className="row ">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
import React, { Component } from 'react';

import ConnectedItems from '../containers/ConnectedItems'


class Layout extends Component {

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
            </div>
        );

        return (
            <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">{title}</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <ul className="list-group list-group-flush">
                    {table}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
    }
}

export default Layout;




    
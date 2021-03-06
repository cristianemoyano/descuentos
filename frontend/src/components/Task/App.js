import React, { Component } from "react";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import ConnectedPage from '../../containers/Task/ConnectedPage'
import rootReducer from '../../reducers'

export default class Task extends Component {

  constructor(props) {
    super(props);
    // creates a store w/ Redux
    this.store = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );

  }
  
  render() {
    return (
        <Provider store={this.store} >
            <ConnectedPage {...this} />
        </Provider>
    );
  }
}

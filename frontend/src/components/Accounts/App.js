import React, { Component } from "react";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import ConnectedPage from '../../containers/Accounts/ConnectedPage'
import rootReducer from '../../reducers'


export default class Accounts extends Component {

  constructor(props) {
    super(props);
    // creates a store w/ Redux
    this.store = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );
  }
  
  render() {
    const {match} = this.props;

    return (
        <Provider store={this.store} >
            <ConnectedPage {...this} match={match} />
        </Provider>
    );
  }
}

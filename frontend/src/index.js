/* import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
) */

import React from 'react';
import {render} from 'react-dom';

import App from "./components/App";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// retrieve data from server to hydrate the client
const props = window.__SERVER_DATA__ || {};

render(
    <App {...props} />,
    document.getElementById('root')
);
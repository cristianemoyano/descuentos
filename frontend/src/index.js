import React from 'react';
import {render} from 'react-dom';

import AppRouter from "./components/AppRouter";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// retrieve data from server to hydrate the client
const props = window.__SERVER_DATA__ || {};


render(
    <AppRouter {...props} />,
    document.getElementById('root')
);
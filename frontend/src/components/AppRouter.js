import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import {Routes} from '../routes'

import {Menu} from './Base/Menu'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes />
      </div>
    </Router>
  );
}

export default AppRouter;
import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";


import {Menu} from './Base/Menu'
import {Routes} from '../routes'

export default class AppRouter extends Component {
  
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.notificationTypes = {
      'default': 'default',
      'success': 'success',
      'info': 'info',
      'danger': 'danger',
      'warning': 'warning',
  
    }
    this.containersTypes = {
      'top-left': 'top-left',
      'top-right': 'top-right',
      'top-center': 'top-center',
      'bottom-left': 'bottom-left',
      'bottom-right': 'bottom-right',
      'bottom-center': 'bottom-center',
  
    }
  }

  addNotification(title, msg, notificationType, container = 'top-right') {
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: msg,
      type: notificationType,
      insert: "top",
      container: container,
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <ReactNotification ref={this.notificationDOMRef} />

          <Routes {...this}/>
        </div>
      </Router>
    );
  }
}

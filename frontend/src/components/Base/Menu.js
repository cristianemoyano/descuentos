import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {MENU_COMPONENT_TEXTS} from './constants'

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
        <Navbar color="light" light expand="md">
            <Link className="navbar-brand" to="/">{MENU_COMPONENT_TEXTS.brand}</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/about">{MENU_COMPONENT_TEXTS.about}</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/topics">{MENU_COMPONENT_TEXTS.topics}</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/benefits">{MENU_COMPONENT_TEXTS.benefits}</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                          <Link className="nav-link" to="/auth/login">{MENU_COMPONENT_TEXTS.login}</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link className="nav-link" to="/auth/register">{MENU_COMPONENT_TEXTS.register}</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <Link className="nav-link" to="/auth/logout">
                            {MENU_COMPONENT_TEXTS.logout}
                          </Link>
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink ,
  NavbarBrand
} from 'reactstrap';

import '../../App.css';

const logo = require('../img/colgworld.png');

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">
            <img className="headerLogo" src={logo} />
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="m5">
                <NavLink tag={Link} to="/" activeClassName="orange" className="col s5 inactive" exact={true}>Home</NavLink>
              </NavItem>
              <NavItem className="m5">
                <NavLink tag={Link} to="/register" activeClassName="orange" className="col s5 inactive" exact={true}>Sign Up</NavLink>
              </NavItem>
              <NavItem className="m5">
                <NavLink tag={Link} to="/login" activeClassName="orange" className="col s5 inactive" exact={true}>Sign In</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
<<<<<<< HEAD
  NavLink ,
  NavbarBrand
} from 'reactstrap';

import '../../App.css';

const logo = require('../img/colgworld.png');
=======
  NavLink } from 'reactstrap';
>>>>>>> 16eaeee07a16966526e54b5ba51d9da48a905535

class Navigation extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="navbar-fixed">
        <Navbar className="z-depth-0">
          <div className="nav-wrapper white">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to="/"
                  style={{
                    fontFamily: "monospace"
                  }}
                  className="col s5 brand-logo center black-text"
                >
                  <i className="material-icons">code</i>
                  MERN
                </NavLink>
              </NavItem>
            </Nav>
          </div>
>>>>>>> 16eaeee07a16966526e54b5ba51d9da48a905535
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

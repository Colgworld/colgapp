import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
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
                  className="col s5 black-text"
                >
                  <i className="material-icons">code</i>
                  MERN
                </NavLink>
                <NavLink to="/register" className="col s5 black-text">Sign Up</NavLink>
                <NavLink to="/signin" className="col s5 black-text">Sign In</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ivanalogo from '../assets/images/irlogo.png'

class Navigation extends Component {

render() {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="lg">
    <Navbar.Brand><img src={ivanalogo} className="ivana-logo" alt=""/></Navbar.Brand>

    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
    <Navbar.Collapse id="navbar-toggle">
      <Nav className="ml-auto">
        <Link className="nav-link" to="/home">
          home
        </Link>
        <Link className="nav-link" to="/about">
          about
        </Link>
        <Link className="nav-link" to="/contact">
          contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Navigation;
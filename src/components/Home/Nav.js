import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Navbar className="p-0">
    <Navbar.Brand>
      <Link to="/">
        <i className="fas fa-angle-left"></i>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <i className="fas fa-microphone"></i> <i className="fas fa-cog"></i>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav;

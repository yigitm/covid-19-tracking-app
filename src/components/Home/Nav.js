import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from './Home';

const Nav = () => (
  <Navbar className="p-0">
    <Navbar.Brand>
      <Link to="/">
        <i className="fas fa-angle-left"></i> Covid Stats
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

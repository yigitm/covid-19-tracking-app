import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Nav2 = () => (
  <Navbar className="p-0">
    <Navbar.Brand href="#home">
      <Link to="" component={<Home />}>
        Back to Home
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

export default Nav2;

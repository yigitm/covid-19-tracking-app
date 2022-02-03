import React from 'react';
import { Navbar } from 'react-bootstrap';

const Nav = () => (
  <Navbar className="p-0">
    <Navbar.Brand href="#home">Covid Stats</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <i className="fas fa-microphone"></i> <i className="fas fa-cog"></i>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav;

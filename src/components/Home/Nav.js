import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Navbar className="m-0 p-0 bg-red-bold">
    <Navbar.Brand>
      <Link to="/">
        <i className="fas fa-angle-left icon-nav text-light" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <i className="fas fa-microphone icon-nav text-light mx-5" />
        <i className="fas fa-cog icon-nav text-light" />
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav;

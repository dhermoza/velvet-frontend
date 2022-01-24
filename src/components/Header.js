import React from "react";
import logo from '../logo.svg'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="light">
        <Container>
          <Navbar>
            <div className="d-flex justify-content-start">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </div>
            <div className="d-flex justify-content-end">
              <Nav.Link className="navbar-brand" href="/">Home</Nav.Link>
              <Nav.Link className="navbar-brand" href="/about">About Us</Nav.Link>
              <Nav.Link className="navbar-brand" href="/add">Add a Player</Nav.Link>
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export  default Header;

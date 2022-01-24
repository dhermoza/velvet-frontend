import React from "react";
import logo from '../logo.svg'
import {Navbar, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

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
              <a className="navbar-brand" href="/">Home</a>
              <a className="navbar-brand" href="/about">About Us</a>
              <a className="navbar-brand" href="/add">Add a Player</a>
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export  default Header;

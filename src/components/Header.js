import React from "react";
import logo from '../logo.svg'
import {Navbar, Container} from 'react-bootstrap'
const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export  default Header;

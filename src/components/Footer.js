import React from "react";
import { Container, Row, Col, Card, Link } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer p-container">
    <Row xs="auto" className="justify-content-center pb-2">
      <Col><a href="#">About</a></Col>
      <Col><a href="#">Legal</a></Col>
      <Col><a href="#">Contact Us</a></Col>
    </Row>
    <Row xs="auto" className="footer justify-content-center">
      <Col>Made with ❤️ at Velvet</Col>
    </Row>
</Container>
  )
}

export default Footer;

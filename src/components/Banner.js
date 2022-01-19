import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <Container className="banner">
        <Row>
          <Col><h1>Velvet</h1></Col>
        </Row>
        <Row>
          <Col>
            <p>The best game to start <br />
            developing new habits</p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
          <Button variant="primary">Learn More</Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Banner;

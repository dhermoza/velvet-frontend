import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Show = () => (
  <div>
    <nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="pb-3">Player ID</h2>
      <div className="d-flex justify-content-center pb-5">
        <div className="px-5">
          <img src="https://lh3.googleusercontent.com/d/1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-=s220?authuser=0" alt="Avatar" width="400" height="400" />
        </div>
        <div className="text-align-start">
          <br></br>
          <form  className="form pb-5">
            <Row className="justify-content-between">
              <Col xs="auto">
                <label htmlFor="nickname">Nickname:</label>
                <input name="nickname" />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-between">
              <Col xs="auto">
                <label htmlFor="avatar">Avatar:</label>
                <input name="avatar"  />
              </Col>
            </Row>
            <br />

            <Row className="justify-content-between">
              <Col xs="auto">
                <label htmlFor="ranking">Ranking:</label>
                <input name="ranking" type="number"  />
              </Col>
            </Row>
            <br />

            <Row className="justify-content-between">
              <Col xs="auto">
                <label htmlFor="status">Status:</label>
                <input name="status" />
              </Col>
            </Row>
            <br />
            <Button type="submit" variant="primary" className="submitButton">Update</Button>{' '}
          </form>
        </div>
      </div>

    </nav>
  </div>
);

export default Show;

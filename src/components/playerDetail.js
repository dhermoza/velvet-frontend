import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PlayerDetail = ({ data }) => {
  console.log(data);
  return (
    <>
      <Container className="p-container">
        <Row>
          <Col>
            <Card style={{ width: "100%", margin: "0 auto" }}>
              <Card.Body>
                <Row className="justify-content-between">
                  <Col xs="auto">
                    <label htmlFor="nickname">Nickname:</label>
                    <p>{data.nickname}</p>
                    {/* <input name="nickname" /> */}
                  </Col>
                </Row>
                <br />
                {/* <Row className="justify-content-between">
                  <Col xs="auto">
                    <label htmlFor="avatar">Avatar:</label>
                    <input name="avatar" />
                  </Col>
                </Row> */}
                <br />
                <Row className="justify-content-between">
                  <Col xs="auto">
                    <label htmlFor="ranking">Ranking:</label>
                    <p>{data.ranking}</p>

                    {/* <input name="ranking" type="number" /> */}
                  </Col>
                </Row>
                <br />
                <Row className="justify-content-between">
                  <Col xs="auto">
                    <label htmlFor="status">Status:</label>
                    <p>{data.status}</p>

                    {/* <input name="status" /> */}
                  </Col>
                </Row>
                <br />
                {/* <Button
                  type="submit"
                  variant="primary"
                  className="submitButton"
                >
                  Update
                </Button>{" "} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlayerDetail;

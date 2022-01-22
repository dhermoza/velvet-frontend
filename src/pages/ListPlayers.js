import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TablePlayer from "../components/TablePlayers";

const ListPlayers = () => {

  useEffect(() => {

  })

  return (
    <>
      <Container className="p-container">
        <h3 className="p=text">List of players</h3>
        <Row>
          <TablePlayer/>
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

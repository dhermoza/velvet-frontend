import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPlayer from "./CardPlayer";


const RowPlayers = () => {
  const [players, setPlayers] = useState();

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:3006/api/v1/players/hall";
    fetch("apiUrl")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response.array, "repsonse");
        setPlayers(response.array);
        // console.log("This is your data", response);
      })
      .catch((error) => console.log(error));

  }, []);
  return (
    <>
      <Container className="p-container">
        <h3 className="t-white">Top Players</h3>
        <Row>
          {!players
            ? "sin resultados"
            : players.map((player) => {
                return <CardPlayer data={player} />;
              })}
        </Row>
      </Container>
    </>
  );
};

export default RowPlayers;

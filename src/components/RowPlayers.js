import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPlayer from "./CardPlayer";
const topPlayers = [
  {
    id: "0001",
    nickname: "Raw",
    status: "oro",
    ranking: "109939399",
    avatar:
      "https://lh3.googleusercontent.com/d/1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z=s220?authuser=0",
  },
  {
    id: "0002",
    nickname: "Jhayce",
    status: "oro",
    ranking: "109939300",
    avatar:
      "https://lh3.googleusercontent.com/d/1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z=s220?authuser=0",
  },
  {
    id: "0003",
    nickname: "Diego",
    status: "oro",
    ranking: "953898292",
    avatar:
      "https://lh3.googleusercontent.com/d/1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z=s220?authuser=0",
  },
  {
    id: "0004",
    nickname: "Raul",
    status: "oro",
    ranking: "9428478382",
    avatar:
      "https://lh3.googleusercontent.com/d/1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z=s220?authuser=0",
  },
  {
    id: "0005",
    nickname: "Manu",
    status: "oro",
    ranking: "9099393993",
    avatar:
      "https://lh3.googleusercontent.com/d/1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z=s220?authuser=0",
  },
];

const RowPlayers = () => {
  return (
    <>
      <Container>
        <h3 className="t-white">Top Players</h3>
        <Row>
          {topPlayers.map((player) => {
            return (
              <Col>
                <CardPlayer key={player.id} data={player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default RowPlayers;

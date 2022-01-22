import React, { useEffect, useState } from "react";
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
      "https://lh3.googleusercontent.com/d/17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b=s220?authuser=0",
  },
  {
    id: "0003",
    nickname: "Diego",
    status: "oro",
    ranking: "953898292",
    avatar:
      "https://lh3.googleusercontent.com/d/1wy_udY0W2rebTfKDYVClfAbWewWqfzmd=s220?authuser=0",
  },
  {
    id: "0004",
    nickname: "Raul",
    status: "oro",
    ranking: "9428478382",
    avatar:
      "https://lh3.googleusercontent.com/d/1TUfAaVfZgGee0UKQK8bxJziDKc31Xdet=s220?authuser=0",
  },
  {
    id: "0005",
    nickname: "Manu",
    status: "oro",
    ranking: "9099393993",
    avatar:
      "https://lh3.googleusercontent.com/d/1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-=s220?authuser=0",
  },
];

const RowPlayers = () => {
  const [players, setPlayers] = useState();

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:3006/api/v1/players/hall";
    fetch("http://localhost:3006/api/v1/players/hall")
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
    // let response = await fetch('http://localhost:3000/api/v1/players/hall');

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
  }, []);
// console.log(players);
  return (
    <>
      <Container className="p-container">
        <h3 className="t-white">Top Players</h3>
        <Row>
          { !players ? "sin resultados" : (
            players.map((player) => {
              return (<CardPlayer data={player}/>)
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default RowPlayers;

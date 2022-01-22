import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PlayerDetail from "../components/playerDetail";

const Show = () => {
  const id = useParams().id;

  const [uniquePlayer, setuniquePlayer] = useState({});

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:3006/api/v1/players/${id}`;
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setuniquePlayer(response.data);
        // console.log("This is your data", response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="pb-3">Record: {`Player ${uniquePlayer.id}`}</h2>
        <div className="d-flex justify-content-center pb-5">
          <div className="px-5">
            <img
              src="https://lh3.googleusercontent.com/d/1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-=s220?authuser=0"
              alt="Avatar"
              width="400"
              height="400"
            />
          </div>
          <div className="text-align-start">
            <br></br>
            {!uniquePlayer ? (
              "sin resultados"
            ) : (
              <PlayerDetail data={uniquePlayer} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Show;

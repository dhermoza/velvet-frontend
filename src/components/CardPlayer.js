import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardPlayer = ({data}) => {
  console.log(data);
  return (
    <Link to={`/players/${data.id}`}>
      <Card style={{ width: "12rem" }} >
        <Card.Img variant="top" src={data.avatar} rounded/>
        <Card.Body>
          <Card.Title className="p-text" >{data.nickname}</Card.Title>
          <Card.Text>
          <p className="p-text">{data.ranking}</p>
          <p className="p-text">{data.status}</p>
          </Card.Text>
          <Button variant="primary" href="/show">Go </Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardPlayer;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TablePlayer from "../components/TablePlayer";

const ListPlayers = () => {
  const [dataState, setdataState] = useState([]);

  const data = React.useMemo(() => [], []);
  console.log(data, "dataaa");

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nickname",
        accessor: "col2",
      },
      {
        Header: "Status",
        accessor: "col3", // accessor is the "key" in the data
      },
      {
        Header: "Ranking",
        accessor: "col4",
      },
    ],
    []
  );

  useEffect(() => {
    const apiUrl = "https://velvet-backend.herokuapp.com/api/v1/players";
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response.array, "repsonse");

        const arrayData = response.array.map((ele) => {
          return data.push({
            col1: ele.id,
            col2: ele.nickname,
            col3: ele.status,
            col4: ele.ranking,
          });
        });
        setdataState(arrayData);
        console.log("This is your data", data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="p-container">
        <h3 className="p-text">List of players</h3>
        <Row>
          <TablePlayer data={data} columns={columns} />
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

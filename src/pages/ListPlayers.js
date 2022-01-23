import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TablePlayer from "../components/TablePlayer";

const ListPlayers = () => {
  const [dataState, setdataState] = useState([]);

  const [paginaState, setpaginaState] = useState([]);
  const [paginasState, setpaginasState] = useState([]);
  //const state  = { loading: true, playerIndex: []}
  const data = React.useMemo(() => [], []);
  const pagina = React.useMemo(() => [], []);
  const paginas = React.useMemo(() => [], []);
  //console.log(data, "dataaa");

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
    const apiUrl = "http://localhost:3001/api/v1/players.json";
    fetch(apiUrl)
      .then(response =>
        {if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
       console.log(response);
        console.log(response.players);
        console.log(response.page);
        console.log(response.pages);
        const arrayData = response.players.map((ele) => {
         return data.push({
            col1: ele.id,
            col2: ele.nickname,
            col3: ele.status,
            col4: ele.ranking,
          });
        });
        setpaginaState(response.page);
        setpaginasState(response.pages);
        setdataState(arrayData);
        console.log("This is your data", data);
        console.log("page", paginaState);
        console.log("pages", paginasState);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="p-container">
        <h3 className="p-text">List of players</h3>
        <Row>
          <TablePlayer data={data} columns={columns} pagina={pagina} paginas={paginas}/>
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

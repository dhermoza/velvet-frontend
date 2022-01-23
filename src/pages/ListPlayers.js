import React, { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import TablePlayer from "../components/TablePlayer";

const ListPlayers = () => {
  const dataState = {
    loading: true,
    playerandPageInfo: {},
    current: 1,
    page_count: 1
  };
  const [{ loading, playerandPageInfo, current, page_count}, setdataState] = useState({...dataState});

  //const [paginaState, setpaginaState] = useState([]);
  //const [paginasState, setpaginasState] = useState([]);
  //const state  = { loading: true, playerIndex: []}
  const data = React.useMemo(() => [], []);
  //const pagina = React.useMemo(() => [], []);
  //const paginas = React.useMemo(() => [], []);
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
    const apiUrl = "https://velvet-backend.herokuapp.com/api/v1/all_players_paginated/"+current;
    fetch(apiUrl)
      .then(response =>
        {if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response);
        console.log(response.players);
        console.log(response.current);
        console.log(response.page_count);
        const arrayData = response.players.map((ele) => {
         return data.push({
            col1: ele.id,
            col2: ele.nickname,
            col3: ele.status,
            col4: ele.ranking,
          });
        });
        setdataState({ drinkAndPageInfo: arrayData, loading: false, current: response.current, page_count: response.page_count});
        console.log("This is your data", data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="p-container">
        <h3 className="p-text">List of players</h3>
        <Row>
          <TablePlayer data={data} columns={columns} current={current} page_count={page_count} loading={loading}/>
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

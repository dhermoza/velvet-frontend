import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search";
import TablePlayer from "../components/TablePlayers";
import useDataSearch from "../hooks/useSearch";
import Axios from "axios";
import PaginationControlled from "../components/Pagination";

const ListPlayers = () => {
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
      },
      {
        Header: "Nickname",
      },
      {
        Header: "Status",
      },
      {
        Header: "Ranking",
      },
    ],
    []
  );

  const {dataState, loading, pageCount } = useDataSearch(query, pageNum, setPageNum)


  return (
    <>
      <Container className="p-container">
        <h3 className="p-text">List of players</h3>
        <Row>
          <Search query={query} setQuery={setQuery} />
        </Row>
        <Row>
          <TablePlayer data={dataState} columns={columns} />
        </Row>
        <Row>
          <PaginationControlled
            page={pageNum}
            setPage={setPageNum}
            count={pageCount}
          />
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

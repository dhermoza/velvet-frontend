import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search";
import TablePlayer from "../components/TablePlayers";
import useDataSearch from "../hooks/useSearch";
import Axios from "axios";
import PaginationControlled from "../components/Pagination";
import useFilters from "../hooks/useFilters";
import Filters from "../components/Filters";

const ListPlayers = () => {
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const [data, setData] = useState('');
  // const [loading, setLoading] = useState(true);

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

  const {dataState, loading, pageCount, setdataState, setPageCount } = useDataSearch(query, pageNum, setPageNum)
  // const {data} = useFilters(status, setStatus, ranking, setRanking, data, setData)

  return (
    <>
      <Container className="p-container">
        <h3 className="p-text">List of players</h3>
        <Row>
          <Col>
            <Search query={query} setQuery={setQuery} />
          </Col>
          <Col>
          <Filters data={dataState} setData={setdataState} pageCount={pageCount} setPageCount={setPageCount} pageNum={pageNum} setPageNum={setPageNum}/>
        </Col>
          <Col>
          <PaginationControlled
            page={pageNum}
            setPage={setPageNum}
            count={pageCount}
          />
          </Col>
        </Row>
        <Row>
          <TablePlayer data={dataState} columns={columns} />
        </Row>
        <Row>
          
        </Row>
      </Container>
    </>
  );
};

export default ListPlayers;

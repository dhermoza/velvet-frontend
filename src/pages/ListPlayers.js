import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search";
import TablePlayer from "../components/TablePlayers";
import useDataSearch from "../hooks/useSearch";
import Axios from "axios";
import PaginationControlled from "../components/Pagination";

const ListPlayers = () => {
  const [dataState, setdataState] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const data = React.useMemo(() => dataState, []);
  // console.log(data, "dataaa");
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

  useEffect(() => {
    setPageNum(1);
  }, []);

  useEffect(() => {
    let dataInitial = [];

    const apiUrl = `https://velvet-backend.herokuapp.com/api/v1/players`;

    console.log(query, "aqui");
    if (query === "") {
      Axios({
        method: "GET",
        url: apiUrl,
        params: { page: pageNum },
      })
        .then(async (response) => {

          await response.data.players.map((ele) => {
            return dataInitial.push([
              ele.id,
              ele.nickname,
              ele.status,
              ele.ranking,
            ]);
          });
          setPageCount(response.data.page_count);
          setdataState(dataInitial);
        })
        .catch((error) => console.log(error));
    }
    setLoading(true);

    Axios({
      method: "GET",
      url: apiUrl,
      params: { query: query, page: pageNum },
    }).then(async (res) => {
      await res.data.players.map((ele) => {
        const arr = [ele.id, ele.nickname, ele.status, ele.ranking];
        return dataInitial.push(arr);
      });
      setLoading(false);
      setPageCount(res.data.page_count);

      return setdataState(dataInitial);
    });
  }, [query, pageNum]);

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

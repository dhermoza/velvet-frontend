import { useState, useEffect } from "react";
import Axios from "axios";

const useDataSearch = (query, pageNum, setPageNum) => {
  console.log(query, "query");
  const apiUrl = `https://velvet-backend.herokuapp.com/api/v1/players`;

const [dataState, setdataState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

useEffect(() => {
  setPageNum(1);
}, []);

useEffect(() => {
  let dataInitial = [];

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

return { dataState, loading, pageCount }
};

export default useDataSearch;

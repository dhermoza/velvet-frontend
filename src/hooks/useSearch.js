// import { useState, useEffect } from "react";
// import Axios from "axios";

// const useDataSearch = (query) => {
//   console.log(query, "query");
//   const apiUrl = `https://velvet-backend.herokuapp.com/api/v1/players?query=${query}`;

//   const [dataSearch, setDataSearch] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let dataInitial = [];

//     const apiUrl = `http://localhost:3006/api/v1/players`;

//     console.log(query, "aqui");
//     if (query === "") {
//       Axios({
//         method: "GET",
//         url: apiUrl,
//         params: { page: pageNum },
//       })
//         .then(async (response) => {
//           // console.log(response.data.players, "repsonse");

//           await response.data.players.map((ele) => {
//             return dataInitial.push([
//               ele.id,
//               ele.nickname,
//               ele.status,
//               ele.ranking,
//             ]);
//           });
//           setPageCount(response.data.page_count);
//           setdataState(dataInitial);
//           // console.log("This is your data", arrayData);
//         })
//         .catch((error) => console.log(error));
//     }
//     setLoading(true);

//     Axios({
//       method: "GET",
//       url: apiUrl,
//       params: { query: query, page: pageNum },
//     }).then(async (res) => {
//       console.log(res.data.players, "search");
//       await res.data.players.map((ele) => {
//         console.log(ele);
//         const arr = [ele.id, ele.nickname, ele.status, ele.ranking];
//         return dataInitial.push(arr);
//       });
//       setLoading(false);
//       setPageCount(res.data.page_count);

//       return setdataState(dataInitial);
//       // setHasMore(res.data.results.length > 0);
//       // return setdataState(res)
//     });
//     // console.log(dataInitial, "datain");
//   }, [query, pageNum]);
// };

// export default useDataSearch;

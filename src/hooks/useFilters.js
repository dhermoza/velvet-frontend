// import { useState, useEffect } from "react";
// import Axios from "axios";

// const useFilters = ( status, setStatus, ranking, setRanking) => {
//   console.log(status, "status");
//   const apiUrl = `https://velvet-backend.herokuapp.com/api/v1/players`;

// // const [data, setdata] = useState([]);
// // const [loading, setLoading] = useState(true);
// const [pageCount, setPageCount] = useState(0);

// useEffect(() => {
//   setStatus(1);
// }, []);

// useEffect(() => {
//   let dataInitial = [];

//   console.log(status, "aqui");
//   // if (status === "") {
//   //   Axios({
//   //     method: "GET",
//   //     url: apiUrl,
//   //     params: { status: status },
//   //   })
//   //     .then(async (response) => {

//   //       await response.data.players.map((ele) => {
//   //         return dataInitial.push([
//   //           ele.id,
//   //           ele.nickname,
//   //           ele.status,
//   //           ele.ranking,
//   //         ]);
//   //       });
//   //       setPageCount(response.data.page_count);
//   //       setdata(dataInitial);
//   //     })
//   //     .catch((error) => console.log(error));
//   // }
//   // setLoading(true);

//   Axios({
//     method: "GET",
//     url: apiUrl,
//     params: { status: status, ranking: ranking },
//   }).then(async (res) => {
//     await res.data.players.map((ele) => {
//       const arr = [ele.id, ele.nickname, ele.status, ele.ranking];
//       return dataInitial.push(arr);
//     });
//     // setLoading(false);
//     setPageCount(res.data.page_count);

//     return setData(dataInitial);
//   });
// }, [status, ranking]);

// return { data }
// };

// export default useFilters;

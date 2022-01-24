import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Axios from "axios";

const  Filters = ({data, setData, pageCount, setPageCount, pageNum, setPageNum}) => {
  // const [age, setAge] = React.useState('');
  const [status, setStatus] = useState("");
  const [ranking, setRanking] = useState("");
  const apiUrl = `https://velvet-backend.herokuapp.com/api/v1/players`;

  // const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageNum(1);
  }, []);
useEffect(() => {
  let dataInitial = [];

  console.log(status, "aqui");
  // if (status !== "") {
  //   Axios({
  //     method: "GET",
  //     url: apiUrl,
  //     params: { status: status, page: pageNum },
  //   })
  //     .then(async (response) => {

  //       await response.data.players.map((ele) => {
  //         return dataInitial.push([
  //           ele.id,
  //           ele.nickname,
  //           ele.status,
  //           ele.ranking,
  //         ]);
  //       });
  //       setPageCount(response.data.page_count);
  //       setData(dataInitial);
  //     })
  //     .catch((error) => console.log(error));
  // }
  // setLoading(true);

  Axios({
    method: "GET",
    url: apiUrl,
    params: { status: status, ranking: ranking, page: pageNum },
  }).then(async (res) => {
    await res.data.players.map((ele) => {
      const arr = [ele.id, ele.nickname, ele.status, ele.ranking];
      return dataInitial.push(arr);
    });
    setLoading(false);
    console.log(res.data, "resssss");
    setPageCount(res.data.page_count);

    return setData(dataInitial);
  });
}, [status, ranking, pageNum]);

  const handleChangeStatus = (event) => {
    console.log(event.target.value, 'le');
    setStatus(event.target.value);
  };
  const handleChangeOrder = (event) => {
    console.log(event.target.value, 'le');
    setRanking(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status}
          onChange={handleChangeStatus}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"oro"}>Oro</MenuItem>
          <MenuItem value={"plata"}>Plata</MenuItem>
          <MenuItem value={"bronce"}>Bronce</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Ordenar</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={ranking}
          onChange={handleChangeOrder}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"DESC"}>De mayor a menor Ranking</MenuItem>
          <MenuItem value={"ASC"}>De menor a mayor Ranking</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filters;

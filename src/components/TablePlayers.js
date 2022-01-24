import React from "react";
import { Table} from "react-bootstrap";

const TablePlayer = ({ columns, data }) => {
  return (
    // apply the table props
    <>
      <Table responsive>
        <thead>
          <tr>
            {columns.map((index) => (
              <th key={index}>{index.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map((ele) => {
              console.log(ele);
              return(
                <tr>
                 {ele.map((el) => {
                  return (<td key={el.id}>{el}</td>)
                 } ) }
                </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    </>
  );
};

export default TablePlayer;

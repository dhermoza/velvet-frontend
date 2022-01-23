import React, { useState } from "react";
import { useTable, usePagination, useSortBy } from 'react-table'
import ReactPaginate from 'react-paginate';

const TablePlayer = ({columns, data, current, page_count, loading}) => {

  const [items, setItems] = useState([]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize},
  } = useTable({ columns, data, manualPagination: true, pageCount: page_count, }, useSortBy, usePagination)

  const fetchItems = async (currentPage) => {
    const res = await fetch(
      `https://velvet-backend.herokuapp.com/api/v1/all_players_paginated/${currentPage}`
    );
    const data = await res.json();
    return data;
  }

  const handlePageClick = async (data) => {

    console.log(data.selected)
    let currentPage =data.selected + 1;
    console.log(currentPage)
    const players = await fetchItems(currentPage);
    setItems(players)
    console.log(players)
  }
  return (
// apply the table props
<>
   <table {...getTableProps()}>
     <thead>
       {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps( column.getSortByToggleProps())}>
               {// Render the header
               column.render('Header')}
                <span>
                 {column.isSorted ? (column.isSortedDesc ? '﹀' : '︿') : '' }
                </span>
               </th>
           ))}
         </tr>
       ))}
     </thead>
     {/* Apply the table body props */}
     <tbody {...getTableBodyProps()}>

      {!data ? `<p>Sin resultados</p>` : (page.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      }))}
      <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan="10000">Loading...</td>
            ) : (
              <td colSpan="10000">
                Showing {page.length} of ~{page_count * pageSize}{' '}
                results
              </td>
            )}
      </tr>
     </tbody>
   </table>

    <ReactPaginate
      previousLabel = {'Previous'}
      nextLabel = {'Next'}
      breakLabel = {'...'}
      pageCount = {page_count}
      marginPagesDisplayed = {2}
      pageRangesDisplayed = {3}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}

    />
   </>
  )
}

export default TablePlayer;

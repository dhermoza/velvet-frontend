import React from "react";
import { useTable, usePagination, useSortBy } from 'react-table'
import Loader from './Loader'


const TablePlayer = ({columns, data, current, page_count, loading}) => {

  console.log(columns);
  console.log(data);
  console.log(current);
  console.log(page_count);
  console.log(loading);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize},
  } = useTable({ columns, data, manualPagination: true, pageCount: page_count, }, useSortBy, usePagination)

  React.useEffect(() => {
    fetchData && fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])

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
     </tbody>
   </table>

    <div className="pagination d-flex justify-content-center">
        <span className="px-3">
          Page{' '}<p>
            {pageIndex + 1} of {pageOptions.length}
          </p>{' '}
        </span>
        <button style={{ height: '50px',  width: '50px' }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'《'}
        </button>{' '}
        <button style={{ height: '50px', width: '50px' }} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'〈'}
        </button>{' '}
        <button style={{ height: '50px', width: '50px' }} onClick={() => nextPage()} disabled={!canNextPage}>
          {'〉'}
        </button>{' '}
        <button style={{ height: '50px', width: '50px' }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'》'}
        </button>{' '}

        <span className="px-3">
          Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '80px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
  </div>
   </>
  )
}

export default TablePlayer;

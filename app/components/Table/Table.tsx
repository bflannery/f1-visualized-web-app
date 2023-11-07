import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  RowData,
  TableOptions,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table';
import { Constructor } from '@/app/api/constructors'
import { useState } from 'react'


interface ReactTableProps<T extends object> {
  data: Constructor[];
  columns: ColumnDef<T>[];
}

export const Table = <T extends object>({ data, columns }: ReactTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  } as TableOptions<RowData>);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden p-2">
            <table className="min-w-full">
              <thead className="border-b-2 border-black text-left">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
              </thead>
              <tbody>
              {table.getRowModel().rows.map(row => {
                  return (
                    <tr key={row.id} className="border-b-2 border-black p-4">
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


// <table className="min-w-full text-center">
//               <thead className="border-b bg-gray-50">
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <th key={header.id} className="px-6 py-4 text-sm font-medium text-gray-900">
//                       {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//               </thead>
//               <tbody>
//               {table.getRowModel().rows.map((row) => (
//                 <tr key={row.id} className='border-b" bg-white'>
//                   {row.getVisibleCells().map((cell) => (
//                     <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900" key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//               </tbody>
//             </table>

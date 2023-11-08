'use client'

import { Driver, getApiDrivers } from '@/app/api/drivers'
import { useEffect, useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table';
import { Table } from '@/app/components/Table/Table'

export default function Page() {
  const [drivers, setDrivers] = useState<Driver[]>([])

  const getDrivers= async () => {
    const apiDrivers = await getApiDrivers()
    setDrivers([...apiDrivers, ...drivers])
  }
  useEffect(() => {
    getDrivers()
  }, [])


  //   id: string
  //   forename: string
  //   surname: string
  //   dob: string
  //   reference: string
  //   nationality: string
  //   code: string
  //   number: number
  //   wiki_url: string

  const columns = useMemo<ColumnDef<Driver>[]>(
    () => [
      {
        header: 'First Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'forename',
      },
      {
        header: 'Surname ',
        cell: (row) => row.renderValue(),
        accessorKey: 'surname',
      },
      {
        header: 'DOB ',
        cell: (row) => row.renderValue(),
        accessorKey: 'dob',
      },
      {
        header: 'Nationality ',
        cell: (row) => row.renderValue(),
        accessorKey: 'nationality',
      },
      {
        header: 'Code ',
        cell: (row) => row.renderValue(),
        accessorKey: 'code',
      },
      {
        header: 'Number',
        cell: (row) => row.renderValue(),
        accessorKey: 'number',
      },
    ],
    []
  );
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <Table data={drivers} columns={columns} />
        </div>
      </div>
    </div>
  );
}

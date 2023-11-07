'use client'

import { Constructor, getConstructors } from '@/app/api/constructors'
import { useEffect, useMemo, useState } from 'react'
import {
  LinkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import type { ColumnDef } from '@tanstack/react-table';
import { Table } from '@/app/components/Table/Table'

export default function Page() {
  const [constructors, setConstructors] = useState<Constructor[]>([])

  const getApiConstructors = async () => {
    const apiConstructors = await getConstructors()
    setConstructors([...apiConstructors, ...constructors])
  }
  useEffect(() => {
    getApiConstructors()
  }, [])


  const columns = useMemo<ColumnDef<Constructor>[]>(
    () => [
      {
        header: 'Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
      },
      {
        header: 'Nationality',
        cell: (row) => row.renderValue(),
        accessorKey: 'nationality',
      },
    ],
    []
  );
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <Table data={constructors} columns={columns} />
        </div>
      </div>
    </div>
  );
}

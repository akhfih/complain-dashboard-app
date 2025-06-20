'use client'

import { useEffect, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import PerPicChart from '../components/PerPicChart'
import PerAreaPie from '../components/PerAreaPie'
import PerDayTrend from '../components/PerDayTrend'
import PerShiftChart from '../components/PerShiftChart'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


interface ComplaintSummary {
  total: number;
  averageDuration: number;
  longestComplaint: {
    id_customer: string;
    nama_perusahaan: string;
    duration: number;
  };
}


export default function HomePage() {
    const [summary, setSummary] = useState<ComplaintSummary | null>(null);

  const stats = [
    { id: 1, name: 'Total Komplain', stat: summary ? summary.total.toString() : '-', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Rata-rata Durasi Komplain (Jam)', stat: summary ? summary.averageDuration.toString() : '-', icon: ClockIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Komplain Terlama (Jam)', stat: summary && summary.longestComplaint ? summary.longestComplaint.duration.toString() : '-', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
  ]


  useEffect(() => {
    fetch('/api/complaints/summary')
      .then((res) => res.json())
      .then((data) => setSummary(data));

  


  }, [])

 
  return (
    <>

      <div className='px-4 sm:px-6 lg:px-8'>
        <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-2 shadow-sm sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <item.icon aria-hidden="true" className="size-6 text-white" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>

                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">

                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <PerShiftChart />

        <PerAreaPie />
        <PerPicChart />

        <PerDayTrend />

      </div>







    </>
  )
}

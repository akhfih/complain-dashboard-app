'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerDayTrend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/complaints/per-day')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded m-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Tren Jumlah Complain per Hari</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="jumlah" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

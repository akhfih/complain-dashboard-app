'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

export default function PerAreaPie() {
  const [data, setData] = useState([]);

  useEffect(() => {
  fetch('/api/complaints/per-area')
    .then(res => res.json())
    .then(rawData => {
      const cleanedData = rawData
        .map((item: { jumlah: any; }) => ({
          ...item,
          jumlah: Number(item.jumlah),
        }))
        .filter((item: { jumlah: number; }) => item.jumlah > 0) // optional: buang yang 0
        .sort((a: { jumlah: number; }, b: { jumlah: number; }) => b.jumlah - a.jumlah); // optional: urutkan dari terbesar

      setData(cleanedData);
    })
    .catch(err => {
      console.error("Gagal fetch data area:", err);
    });
}, []);


  useEffect(() => {
    console.log("PerAreaPie data:", data);
  }, [data]);

  return (
    <div className="p-4 bg-white shadow rounded m-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Distribusi Complain per Area</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="jumlah"
            nameKey="area"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function PerShiftChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/complaints/per-shift')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);



    return (
        <div className="p-4 bg-white shadow-sm rounded m-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Jumlah Komplain per Shift</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time_shifting" />
                    <YAxis domain={[0, 'dataMax + 2']} />
                    <Tooltip />
                    <Bar dataKey="jumlah" fill="oklch(58.5% .233 277.117)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

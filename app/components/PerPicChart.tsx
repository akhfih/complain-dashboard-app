'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerPicChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/complaints/per-pic')
            .then(res => res.json())
            .then(setData);
    }, []);

    useEffect(() => {
        console.log("PerPicChart data:", data);
    }, [data]);

    return (
        <div className="p-4 bg-white shadow rounded m-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Jumlah Complain per PIC</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                    <XAxis dataKey="pic_handling_complain"
                        interval={0}
                        angle={-30}
                        textAnchor="end"
                        />
                    <YAxis domain={[0, 'dataMax + 2']} />
                    <Tooltip />
                    <Bar dataKey="jumlah" fill="oklch(58.5% .233 277.117)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

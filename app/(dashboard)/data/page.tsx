'use client';

import { useEffect, useState } from 'react';

export default function DataPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // jumlah data per halaman

  useEffect(() => {
    fetch('/api/complaints')
      .then((res) => res.json())
      .then(setData);
  }, []);

  // Hitung data yang akan ditampilkan
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="overflow-x-auto  rounded shadow p-4 mt-6 text-gray-800 m-4">
      <h2 className="text-lg font-bold mb-4">Daftar Complaints</h2>
      <table className="min-w-full border-collapse table-auto text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Perusahaan</th>
            <th className="px-4 py-2 border">Area</th>
            <th className="px-4 py-2 border">Start</th>
            <th className="px-4 py-2 border">End</th>
            <th className="px-4 py-2 border">Durasi (jam)</th>
            <th className="px-4 py-2 border">PIC</th>
            <th className="px-4 py-2 border">Shift</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row: any, index: number) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{row.id_customer}</td>
              <td className="px-4 py-2 border">{row.nama_perusahaan}</td>
              <td className="px-4 py-2 border">{row.area}</td>
              <td className="px-4 py-2 border">{new Date(row.time_start_complain).toLocaleString()}</td>
              <td className="px-4 py-2 border">{new Date(row.time_close_complain).toLocaleString()}</td>
              <td className="px-4 py-2 border">{row.lama_complain_jam}</td>
              <td className="px-4 py-2 border">{row.pic_handling_complain}</td>
              <td className="px-4 py-2 border">{row.time_shifting}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

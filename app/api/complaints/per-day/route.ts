

import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await pool.query(`
    SELECT TO_CHAR(time_start_complain, 'YYYY-MM-DD') AS tanggal, COUNT(*) AS jumlah 
    FROM complaints 
    GROUP BY tanggal 
    ORDER BY tanggal
  `);
  return NextResponse.json(res.rows);
}

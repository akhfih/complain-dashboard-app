// src/app/api/complaints/per-pic/route.ts

import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await pool.query(`
    SELECT pic_handling_complain, COUNT(*) AS jumlah 
    FROM complaints 
    GROUP BY pic_handling_complain 
    ORDER BY jumlah DESC
  `);
  return NextResponse.json(res.rows);
}

import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await pool.query(`
    SELECT area, COUNT(*) AS jumlah 
    FROM complaints 
    GROUP BY area
  `);
  return NextResponse.json(res.rows);
}
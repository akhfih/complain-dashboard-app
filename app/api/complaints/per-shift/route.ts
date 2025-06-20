
import pool from '@/app/lib/db';
import { NextResponse } from 'next/server'


export async function GET() {
  const res = await pool.query('SELECT time_shifting, COUNT(*) as jumlah FROM complaints GROUP BY time_shifting ORDER BY time_shifting');
  return NextResponse.json(res.rows);
}


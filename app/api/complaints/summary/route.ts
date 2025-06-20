// src/app/api/complaints/summary/route.ts

import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const totalQuery = await pool.query(`SELECT COUNT(*) AS total FROM complaints`);
    const avgQuery = await pool.query(`SELECT ROUND(AVG(lama_complain_jam)::numeric, 2) AS average_duration 
  FROM complaints`);
  
    const maxQuery = await pool.query(`
      SELECT 
        id_customer, 
        nama_perusahaan, 
        lama_complain_jam AS duration 
      FROM complaints 
      ORDER BY lama_complain_jam DESC 
      LIMIT 1
    `);

    return NextResponse.json({
      total: parseInt(totalQuery.rows[0].total),
      averageDuration: parseFloat(avgQuery.rows[0].average_duration),
      longestComplaint: maxQuery.rows[0]
    });

  } catch (error) {
    console.error('Error fetching complaint summary:', error);
    return NextResponse.json({ error: 'Failed to load summary' }, { status: 500 });
  }
}

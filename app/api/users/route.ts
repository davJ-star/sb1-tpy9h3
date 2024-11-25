import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const users = await query({
      query: 'SELECT * FROM users',
      values: [],
    });

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { name, email } = json;

    const result = await query({
      query: 'INSERT INTO users (name, email) VALUES (?, ?)',
      values: [name, email],
    });

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
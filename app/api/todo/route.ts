import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  console.log(todos);
  return NextResponse.json({
    data: todos,
  });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  });
  return NextResponse.json({ data: todo });
};

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.resolve(
    './app/api/todos',
    'todos.json',
  );
  const fileContents = await fs.readFile(filePath);
  let todos = JSON.parse(fileContents);

  return new NextResponse(JSON.stringify(todos, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// this works if you don't put the id at the end of the URL, otherwise, see /api/todos/[id]/route.js for PUT function
export async function PUT(request) {
  const filePath = path.resolve(
    './app/api/todos',
    'todos.json',
  );
  const fileContents = await fs.readFile(filePath);
  let todos = JSON.parse(fileContents);

  const todosNew = todos.map((toDo) => {
    return toDo.id === toDoItem.id ? toDoItem : toDo;
  });
  await fs.writeFile(
    filePath,
    JSON.stringify(todosNew, null, 2),
  );
  return NextResponse.json(toDoItem);
}

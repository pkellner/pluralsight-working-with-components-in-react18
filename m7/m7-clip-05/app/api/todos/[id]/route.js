import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const id = request.url.split('/').pop();

  const filePath = path.resolve(
    './app/api/todos',
    'todos.json',
  );
  const fileContents = await fs.readFile(filePath);
  let todos = JSON.parse(fileContents);

  const foundRecs = todos.filter((toDo) => toDo.id == id);

  return new NextResponse(
    JSON.stringify(foundRecs, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function PUT(request) {
  const toDoItem = await request.json();

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

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.resolve("./app/api/todo", "todos.json");
  const fileContents = await fs.readFile(filePath);
  let todos = JSON.parse(fileContents);

  return new NextResponse(JSON.stringify({ todos: todos }, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(request) {
  const { updatedTodo: toDoItem } = await request.json();
  const filePath = path.resolve("./app/api/todo", "todos.json");
  const fileContents = await fs.readFile(filePath);
  let todos = JSON.parse(fileContents);

  const todosNew = todos.map((toDo) => {
    return toDo.id === toDoItem.id ? toDoItem : toDo;
  });
  await fs.writeFile(filePath, JSON.stringify(todosNew, null, 2));
  return NextResponse.json(toDoItem);
}

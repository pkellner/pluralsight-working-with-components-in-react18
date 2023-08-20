import "server-only";

import ToDoItem from "../../components/todo/ToDoItem";
import ToDoItemClient from "../../components/todo/ToDoItemClient";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ToDoList() {
  //const url = "http://localhost:4000/todos";
  const url = "http://localhost:3000/api/todos"
  const res = await fetch(url,{
    next: {
      revalidate: 0,
    }
  });
  const results = await res.json();
  //const todoList = results.todos;
  const todoList = results;
  await sleep(1000);

  return (
    <div className="tasks">
      {todoList.map((toDo) => {
        return (
          <ToDoItemClient toDo={toDo} key={toDo.id}>
            <ToDoItem toDo={toDo} />
          </ToDoItemClient>
        );
      })}
    </div>
  );
}

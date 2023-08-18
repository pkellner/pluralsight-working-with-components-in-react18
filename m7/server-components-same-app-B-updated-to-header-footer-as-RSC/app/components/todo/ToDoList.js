import "server-only";

import ToDoItem from "@/app/components/todo/ToDoItem";
import ToDoItemClient from "@/app/components/todo/ToDoItemClient";

export default function ToDoList({ toDoList }) {
  return (
    <div className="tasks">
      {toDoList
        .map((toDo) => {
          return (
            <ToDoItemClient toDo={toDo} key={toDo.id}>
              <ToDoItem toDo={toDo} />
            </ToDoItemClient>
          );
        })}
    </div>
  );
}

import "server-only";

import ToDoItem from "@/app/components/todo/ToDoItem";
import ToDoItemWrapper from "@/app/components/todo/ToDoItemWrapper";

export default function ToDoList({ toDoList }) {
  return (
    <div className="tasks">
      {toDoList
        .map((toDo) => {
          return (
            <ToDoItemWrapper toDo={toDo} key={toDo.id}>
              <ToDoItem toDo={toDo} />
            </ToDoItemWrapper>
          );
        })}
    </div>
  );
}

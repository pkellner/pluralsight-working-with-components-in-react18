"use client";
import ToDo from "./ToDo";
import { useImportantContext } from "@/app/contexts/ImportantContext";

export default function ToDoList({ toDoList }) {
  const {important} = useImportantContext();
  return (
    <div className="tasks">
      {toDoList
        .filter((todo) => {
          return important ? todo.important : true;
        })
        .map((todo) => {
          return <ToDo key={todo.id} todoItem={todo} />;
        })}
    </div>
  );
}

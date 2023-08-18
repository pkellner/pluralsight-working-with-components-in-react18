"use client";
import { useImportantContext } from "@/app/contexts/ImportantContext";

export default function ToDoList({ toDoList }) {
  const { important } = useImportantContext();
  return (
    <div className="tasks">
      {toDoList
        .filter((todo) => {
          return important ? todo.important : true;
        })
        .map((todo) => {
          return (
            <div className="single-task">
              <div>
                {todo.important ? (
                  <span className="badge warning-bg">
                    <i className="fa fa-exclamation-circle"></i>
                  </span>
                ) : null}
                {todo.todoText.slice(0, 60)}
              </div>
            </div>
          );
        })}
    </div>
  );
}

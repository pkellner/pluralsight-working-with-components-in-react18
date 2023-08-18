"use client";

import ToDoItemText from "./ToDoItemText";

export default function ToDo({ todoItem }) {
  return (
    <div className="single-task">
      <div>
        <ToDoItemText
          important={todoItem.important}
          todoText={todoItem.todoText}
        />
      </div>
    </div>
  );
}

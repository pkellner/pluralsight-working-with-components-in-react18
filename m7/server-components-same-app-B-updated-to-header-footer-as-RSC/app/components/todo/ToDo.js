'use client'

import ToDoItemText from "./ToDoItemText";

export default function ToDo({ todoItem }) {
  return (
    <div
      key={todoItem.id}
      className={todoItem.completed ? "single-task completed" : "single-task"}
    >
      <div>
        <ToDoItemText
          important={todoItem.important}
          todoText={todoItem.todoText}
        />
      </div>

      <div className="task-actions">
        <button className="btn edit" title="Edit">
          <i className="fas fa-pencil-alt"></i>
        </button>

        <button className="btn delete" title="Delete">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

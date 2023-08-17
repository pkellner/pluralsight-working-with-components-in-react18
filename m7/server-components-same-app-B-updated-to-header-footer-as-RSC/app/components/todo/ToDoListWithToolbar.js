"use client";
import ToDoFilterToolbar from "./ToDoFilterToolbar";

export default function ToDoListWithToolbar({ children }) {
  return (
    <div>
      <ToDoFilterToolbar />
      {children}
    </div>
  );
}

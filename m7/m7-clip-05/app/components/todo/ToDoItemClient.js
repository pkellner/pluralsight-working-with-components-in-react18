"use client";

import { useImportantContext } from "../../contexts/ImportantContext";

export default function ToDoItemClient({ toDo, children }) {
  const { important } = useImportantContext();

  // return all children if important is false, otherwise, if important is true return just when toDo.important is true
  return important === false ? (
    <>{children}</>
  ) : toDo.important === true ? (
    <>{children}</>
  ) : null;
}

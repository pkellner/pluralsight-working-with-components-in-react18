'use client';

import { useImportantContext }
  from '../../contexts/ImportantContext';

export default function ToDoItemClient({ toDo, children }) {
  const { important } = useImportantContext();

  return important === false ? (
    <>{children}</>
  ) : toDo.important === true ? (
    <>{children}</>
  ) : null;
}

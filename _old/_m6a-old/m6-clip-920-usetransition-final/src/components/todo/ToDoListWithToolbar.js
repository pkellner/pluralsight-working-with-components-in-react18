import React from "react";
import ToDoFilterToolbar from "./ToDoFilterToolbar";

const ToDoListWithToolbar = ({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
  startTransition,
  isPending,
  children,
}) => (
  <div>
    <ToDoFilterToolbar
      displayStatus={displayStatus}
      setDisplayStatus={setDisplayStatus}
      import={important}
      setImportant={setImportant}
      searchText={searchText}
      setSearchText={setSearchText}
      startTransition={startTransition}
      isPending={isPending}
    />
    {children}
  </div>
);
export default ToDoListWithToolbar;

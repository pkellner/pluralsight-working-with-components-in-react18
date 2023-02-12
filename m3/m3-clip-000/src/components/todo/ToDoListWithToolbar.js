import React from "react";
import ToDoFilterToolbar from "./ToDoFilterToolbar";

const ToDoListWithToolbar = ({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
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
    />
    {children}
  </div>
);
export default ToDoListWithToolbar;

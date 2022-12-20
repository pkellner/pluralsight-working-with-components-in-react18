import React from "react";
import ToDoFilterToolbar from "./ToDoFilterToolbar";

export default function ToDoListWithToolbar({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
  children,
}) {
  return (
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
}

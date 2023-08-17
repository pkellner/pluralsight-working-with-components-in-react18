'use client';
import React, {useState} from "react";
import ToDoFilterToolbar from "./ToDoFilterToolbar";
import {useImportantContext} from "@/app/contexts/ImportantContext";



export default function ToDoListWithToolbar({children}) {

  const {
    displayStatus,
    setDisplayStatus,
    searchText,
    setSearchText,
    startTransition,
    isPending,
  } = {
    displayStatus: "all",
    setDisplayStatus: () => {
    },
    searchText: "",
    setSearchText: () => {
    },
    startTransition: () => {
    },
    isPending: false,
  }
  return (
    <div>
      <ToDoFilterToolbar
        displayStatus={displayStatus}
        setDisplayStatus={setDisplayStatus}
        searchText={searchText}
        setSearchText={setSearchText}
        startTransition={startTransition}
        isPending={isPending}
      />
      {children}
    </div>
  );
}

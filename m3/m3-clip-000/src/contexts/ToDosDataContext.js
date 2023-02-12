import React, { createContext } from "react";
import useTodosData from "../hooks/useTodosData";

export const ToDosDataContext = createContext({
  todoList: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  loadingStatus: "",
});

export const TodosDataProvider = ({ children }) => {
  const {
    todoList, createTodo, updateTodo, deleteTodo, loadingStatus, isPending, reFetch,
  } = useTodosData();

  const value = {
    todoList, createTodo, updateTodo, deleteTodo, loadingStatus, isPending, reFetch,
  };

  return (
    <ToDosDataContext.Provider value={value}>
      {children}
    </ToDosDataContext.Provider>
  );
};

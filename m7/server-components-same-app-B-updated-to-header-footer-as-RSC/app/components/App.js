import "server-only";
import TodoListWithToolbar from "./todo/ToDoListWithToolbar";
import ToDoList from "@/app/components/todo/ToDoList";
import ImportantContextProvider from "@/app/contexts/ImportantContext";

import axios from "axios";

export default async function App() {
  const results = await axios.get("http://localhost:3000/api/todo");
  return (
    <ImportantContextProvider>
      <TodoListWithToolbar>
        <ToDoList toDoList={results.data} />
      </TodoListWithToolbar>
    </ImportantContextProvider>
  );
}

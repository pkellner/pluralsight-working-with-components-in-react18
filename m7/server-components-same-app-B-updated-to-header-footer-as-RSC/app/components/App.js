import "server-only";
import ToDoListWithToolbar from "./todo/ToDoListWithToolbar";
import ToDoList from "@/app/components/todo/ToDoList";
import ImportantContextProvider from "@/app/contexts/ImportantContext";

import axios from "axios";

export default async function App() {
  const results = await axios.get("http://localhost:3000/api/todo");
  return (
    <ImportantContextProvider>
      <ToDoListWithToolbar>
        <ToDoList toDoList={results.data.todos} />
      </ToDoListWithToolbar>
    </ImportantContextProvider>
  );
}

import "server-only";
import ToDoList from "@/app/components/todo/ToDoList";
import ImportantContextProvider from "@/app/contexts/ImportantContext";

import axios from "axios";
import ToDoFilterToolbar from "@/app/components/todo/ToDoFilterToolbar";

export default async function App() {
  const results = await axios.get("http://localhost:3000/api/todo");
  return (
    <ImportantContextProvider>
      <ToDoFilterToolbar />
      <ToDoList toDoList={results.data.todos} />
    </ImportantContextProvider>
  );
}

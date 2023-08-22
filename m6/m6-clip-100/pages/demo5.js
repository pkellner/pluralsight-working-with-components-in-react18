import { useState, useTransition } from "react";

function ShowTodoList({ todoList, deferredSearch }) {
  return (
    <div>
      {todoList
        .filter((rec) => rec.includes(deferredSearch))
        .map((rec) => (
          <div key={rec}>{rec}</div>
        ))}
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [searchHighPriority, setSearchHighPriority] = useState("");
  const [isPending, startTransition] = useTransition();
  const [todoList, setTodoList] = useState([
    "clean dog",
    "eat lunch",
    "wash clothes",
    "...",
  ]);

  return (
    <div>
      <input
        value={searchHighPriority}
        onChange={(e) => {
          setSearchHighPriority(e.target.value);
          startTransition(() => setSearch(e.target.value));
        }}
      />
      <ShowTodoList todoList={todoList} deferredSearch={search} />
    </div>
  );
}

export default App;

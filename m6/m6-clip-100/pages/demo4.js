import { useState, useDeferredValue } from "react";

function ShowTodoList({ list, search }) {
  return (
    <div>
      {list
        .filter((rec) => rec.includes(search))
        .map((rec) => (
          <div key={rec}>{rec}</div>
        ))}
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const [todoList, setTodoList] = useState([
    "clean dog",
    "eat lunch",
    "wash clothes",
    "...",
  ]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ShowTodoList list={todoList} search={deferredSearch} />
    </div>
  );
}

export default App;

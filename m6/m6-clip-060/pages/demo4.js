import { useState, useDeferredValue } from "react";

function ShowTodoList({ todoList, deferredSearch }) {
  return (
    <div>
      {todoList.filter(rec => rec.includes(deferredSearch)).map((rec) => (
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
      <ShowTodoList todoList={todoList} deferredSearch={search} />
    </div>
  );
}

export default App;

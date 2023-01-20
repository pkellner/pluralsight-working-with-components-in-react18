import { useState, useDebugValue } from "react";

function useCountTracker() {
  const [count2, setCount2] = useState(201);
  const [count1, setCount1] = useState(101);

  useDebugValue(`count1:${count1}`);
  useDebugValue(`count2:${count2}`);

  return {
    count1,
    count2,
    setCount1,
    setCount2,
  };
}

export default function App() {
  const { count1, count2, setCount1, setCount2 } = useCountTracker();
  return (
    <div className="list-group container p-4 gap-2">
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  );
}

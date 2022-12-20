import { useEffect, useState } from "react";

export default function Index() {
  return <ToDoItem text="Wash clothes" completed={false} important={true} />;
}

function ToDoItem({ text, completed, important }) {
  const [textState, setTextState] = useState(text);
  const [completedState, setCompletedState] = useState(completed);
  useEffect(() => {
    setTextState(`${text} ${new Date().toLocaleTimeString()}`);
  }, []);
  return (
    <div
      onClick={() => {
        setCompletedState(!completedState);
      }}
    >
      <div className={completedState ? "completed" : ""}>
        {important ? "*" : ""} {textState}
      </div>
    </div>
  );
}

export default function Index() {
  return <ToDoItem text="Wash clothes" completed={true} />;
}

function ToDoItem({ text, completed }) {
  return <div className={completed ? "completed" : ""}>{text}</div>;
}

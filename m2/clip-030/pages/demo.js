export default function Index() {
  const toDoItem = {
    text: "Wash clothes",
    completed: false,
    important: true,
    secretData: "MySecretData",
  };
  return <ToDoItem {...toDoItem} />;
}

function ToDoItem(props) {
  return (
    <div className={props.completed ? "completed" : ""}>
      {props.important ? "*" : ""} {props.text}
      {props.text}
      
      {JSON.stringify(props)}
    </div>
  );
}
